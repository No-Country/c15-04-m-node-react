const { countryEmission } = require('./electricity')
const gasEmission = require('./gas')
const { carbonOffset } = require('./offset')
const { car, bus, colectivo, metro, motorcycle, airplane } = require('../emissions/transport')
const { getHigherValue } = require('../util')

const carbonFP = {
  
   getElectricity: function (electricity) {
   	const { consumption, renewable_source, pais } = electricity;

	return renewable_source ? 0 : consumption * countryEmission[pais];
   },

   getGas: function (gas) {
   	if(gas == null) return 0;

   	const { type, units, consumption } = gas;
   	const emission_factor = gasEmission.getEmissionFactor(type, units);

   	return consumption * emission_factor;
   },

   getTransport: function (transport) {
   	let air = 0;
   	let land = 0;

   	if('airplane' in transport){
   		const { airplane: airplane_data } = transport;
   		air += airplane(airplane_data.kms, airplane_data.numberOfSeats, airplane_data.rounTrip);
   	}

   	if('car' in transport){
   		const { car: car_data } = transport;
   		land += car(car_data.kms, car_data.size, car_data.gasoline);
   	}

   	if('bus' in transport){
   		const { bus: bus_data } = transport;
   		land += bus(bus_data.kms);
   	}

   	if('colectivo' in transport){
   		const { colectivo: colectivo_data } = transport;
   		land += colectivo(colectivo_data.kms);
   	}

   	if('metro' in transport){
   		const { metro: metro_data } = transport;
   		land += metro(metro_data.kms);
   	}

   	if('motorcycle' in transport){
   		const { motorcycle: motorcycle_data } = transport;
   		land += motorcycle(motorcycle_data.kms);
   	}

   	return { land, air, total: Number((land + air).toFixed(2)) }
   },

   getCarbonOffset: function (transport_cfp, gas_cfp, electricity_cfp) {
   	let offsets = [];
   	let statistics = [];
   	const total_carbon_footprint = transport_cfp.total + gas_cfp + electricity_cfp;
   	const air_perc = transport_cfp.air > 0 ? ((transport_cfp.air * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const land_perc = transport_cfp.land > 0 ? ((transport_cfp.land * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const transport_perc = transport_cfp.total > 0 ? ((transport_cfp.total * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const gas_perc = gas_cfp > 0 ? ((gas_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const electricity_perc = electricity_cfp > 0 ? ((electricity_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const minTrees = Math.round(total_carbon_footprint / carbonOffset.treePerYear);

   	const higher_emission = getHigherValue([
   		{
   			category: 'transport',
   			value: transport_perc
   		},
   		{
   			category: 'gas',
   			value: gas_perc
   		},
   		{
   			category: 'electricity',
   			value: electricity_perc
   		}
   	]);

   	if(minTrees > 0){
   		offsets.push({
   			minTrees,
   			message: 'Con tu Huella de Carbono, necesitarías plantar un mínimo de ' + minTrees + (minTrees > 1 ? ' arboles ' : ' arbol ') + 'para compensar tu huella en un año.'
   		});
   	}

   	statistics.push({
   		carbon_footprint: {
   			transport: transport_cfp,
   			gas: gas_cfp,
   			electricity: electricity_cfp,
   			total: total_carbon_footprint
   		},
   		emission_percentage: {
   			transport_perc: {
   				air_perc,
   				land_perc,
   				total: transport_perc
   			},
   			gas_perc,
   			electricity_perc,
   			higher_emission
   		}
   	})

   	return { offsets, statistics }
   },

   getOffsetByUser: function (walk_to_work, transport) {
   	let offset_by_user = [];

   	if(transport === null || walk_to_work === null) return offset_by_user;

   	const { car: car_data } = transport;

   	if(typeof walk_to_work === "object"){
   		const car_emission_offset = car(walk_to_work.meters * 0.001, car_data.size, car_data.gasoline);
   		const message = car_emission_offset > 0 ? `De acuerdo a la cantidad de metros que has caminado y a las especificaciones de tu automóvil, has logrado compensar ${car_emission_offset} kgCo2 por no usarlo 👏` : 'Lamentablemente, de acuerdo a la cantidad de metros que has caminado, no has logrado compensar las emisiones de tú automóvil. Pero no te preocupes, te recomendamos que de vez en cuando camines o uses una bicicleta en lugar de usar tu automóvil.';
   		offset_by_user.push({
   			car_emission_offset,
   			message
   		});
   	} else {
   		offset.push({
   			message: 'Vaya, parece que caminar no es tu actividad física preferida. Pero aún así, GreenTrace te recomienda que camines más para reducir en gran medida tus emisiones de Co2. Así que, ¡A mover esas piernitas!'
   		});
   	}

   	return offset_by_user;
   }
  
}

module.exports = carbonFP