const { countryEmission } = require('./electricity')
const gasEmission = require('./gas')
const { carbonOffset } = require('./offset')
const { car } = require('../emissions/transport')
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

   getCarbonOffset: function (transport_cfp, gas_cfp, electricity_cfp, walk_to_work, { car: car_data }) {
   	let offsets = [];
   	let offset_by_user = [];
   	let statistics = [];
   	const total_carbon_footprint = transport_cfp + gas_cfp + electricity_cfp;
   	const transport_perc = transport_cfp > 0 ? ((transport_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const gas_perc = gas_cfp > 0 ? ((gas_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const electricity_perc = electricity_cfp > 0 ? ((electricity_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const minTrees = Math.round(total_carbon_footprint / carbonOffset.treePerYear);

   	const higher_emission = getHigherValue([
   		{
   			category: 'transporte',
   			value: transport_perc
   		},
   		{
   			category: 'gas',
   			value: gas_perc
   		},
   		{
   			category: 'electricidad',
   			value: electricity_perc
   		}
   	]);

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
   			transport_perc,
   			gas_perc,
   			electricity_perc,
   			higher_emission
   		}
   	})

   	return { offsets, offset_by_user, statistics }
   }
  
}

module.exports = carbonFP