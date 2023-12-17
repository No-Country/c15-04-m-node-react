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
   	if(gas == null || typeof gas != 'object') return 0;

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

   getCarbonOffset: function (transport_cfp, gas_cfp, electricity_cfp, pais, user_offset, transport_data) {
   	let offsets = [];
      let offset_by_user = [];
   	const total_carbon_footprint = transport_cfp.total + gas_cfp + electricity_cfp;
   	const air_perc = transport_cfp.air > 0 ? ((transport_cfp.air * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const land_perc = transport_cfp.land > 0 ? ((transport_cfp.land * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const transport_perc = transport_cfp.total > 0 ? ((transport_cfp.total * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const gas_perc = gas_cfp > 0 ? ((gas_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const electricity_perc = electricity_cfp > 0 ? ((electricity_cfp * 100) / total_carbon_footprint).toFixed(2) : 0;
   	const minTrees = Math.round(total_carbon_footprint / carbonOffset.treePerYear);
      const car_km_equivalent = Math.round(total_carbon_footprint / carbonOffset.co2_per_km);
      const led_equivalent = pais != null ? Math.trunc(total_carbon_footprint / carbonOffset.offset_per_led(pais)) : 0;
      const equivalent_houses = pais != null ? Math.trunc(total_carbon_footprint / (270 * countryEmission[pais])) : 0;

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
   			message: 'Con tu Huella de Carbono, necesitarías plantar un mínimo de ' + minTrees + (minTrees > 1 ? ' arboles ' : ' arbol ') + 'para compensarla en un año.'
   		});
   	}

      if(led_equivalent > 0){
         offsets.push({
            led_equivalent,
            message: 'Se necesitarían cambiar ' + led_equivalent + (led_equivalent > 1 ? ' bombillos ' : ' bombillo ') + 'incandescentes por bombillas LED para compensar tu Huella de Carbono.'
         });
      }

      if(user_offset != null && transport_data != null){
         let car_data = null;
         let car_emission_offset = 0;
         if('car' in transport_data && typeof transport_data.car === 'object'){
            car_data = transport_data.car;
         }

         if(typeof user_offset.walk_to_work === "object"){
            const km_traveled = user_offset.walk_to_work.meters * 0.001;
            let message;

            if(car_data != null){
               const walk_offset = car(km_traveled, car_data.size, car_data.gasoline);
               message = walk_offset > 0 ? `De acuerdo a la cantidad de metros que has caminado y a las especificaciones de tu automóvil, has logrado compensar ${walk_offset} kgCo2 por no usarlo 👏` : 'Lamentablemente, de acuerdo a la cantidad de metros que has caminado, no has logrado compensar las emisiones de tú automóvil. Pero no te preocupes, te recomendamos que camines mucho más y reduzcas el uso de tú automóvil.';
               car_emission_offset += walk_offset;
            } else {
               const walk_offset_average = (car(km_traveled, 'small', true) + car(km_traveled, 'small', false) + car(km_traveled, 'medium', true) + car(km_traveled, 'medium', false) + car(km_traveled, 'big', true) + car(km_traveled, 'big', false)) / 6;
               message = 'Vemos que no posee automóvil actualmente, cosa que reduce en gran medida el impacto de tu huella de carbono. ';
               message += walk_offset_average > 0 ? `Esto quiere decir que por caminar, en promedio estás compensando ${walk_offset_average} kgCo2` : 'Sin embargo, lo que has recorrido caminando, no es suficiente para compensar las emisiones de tus actividades.';
            }
            offset_by_user.push(message);
         } else {
            offsets.push({
               message: 'Vaya, parece que caminar no es tu actividad física preferida. Pero aún así, GreenTrace te recomienda que camines más para reducir en gran medida tus emisiones de Co2. Así que, ¡A mover esas piernitas!'
            });
         }

         if(typeof user_offset.bike === "object"){
            const km_traveled = user_offset.bike.meters * 0.001;
            let message;

            if(car_data != null){
               const bike_offset = car(km_traveled, car_data.size, car_data.gasoline);
               message = bike_offset > 0 ? `De acuerdo a la cantidad de metros que has recorrido en bicicleta/monopatín y a las especificaciones de tu automóvil, has logrado compensar ${walk_offset} kgCo2 equivalente por usar tu automóvil 👏` : 'Has hecho uso de la bicicleta y/o monopatín, pero esto no ha sido suficiente para compensar parte de las emisiones de tú automóvil. Pero vemos que es un gran paso para reducir tus emisiones, es por eso que te recomendamos que hagas un mayor uso de ellos.';
               car_emission_offset += bike_offset;
            } else {
               const bike_offset_average = (car(km_traveled, 'small', true) + car(km_traveled, 'small', false) + car(km_traveled, 'medium', true) + car(km_traveled, 'medium', false) + car(km_traveled, 'big', true) + car(km_traveled, 'big', false)) / 6;
               message = bike_offset_average > 0 ? `De acuerdo a la cantidad de metros que has recorrido en bicicleta/monopatín, en promedio estás compensando ${bike_offset_average} kgCo2` : 'El recorrido que has hecho en bicicleta y/o monopatín no generan el impacto positivo necesario o suficiente como para compensar las emisiones de tus actividades.';
            }
            offset_by_user.push(message);
         } else {
            offsets.push({
               message: 'Hemos visto que andar en bicicleta o monopatín es una actividad que no llevas a cabo. Está actividad, además de reducir tus emisiones de Co2, aporta muchos beneficios para tu salud e incluso está comprobado que usar la bicicleta con frecuencia aumenta la felicidad de las personas. Los monopatines, de la misma manera que las bicicletas, te ayudarán a reducir tus emisiones de Co2 debido a que el combustible no es un requisito para funcionar y muchas de ellas operan con motores eléctricos. Te recomendamos que incluyas en tus rutinas habituales, el uso de bicicletas y/o monopatines.'
            });
         }

         if(car_emission_offset > 0){
            offset_by_user.push(`Enhorabuena 🥳, has logrado reducir un total de ${car_emission_offset} KgCo2 del uso de tu automóvil.`);
         }

      }

   	let statistics = {
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
   		},
         equivalences: []
   	}

      if(car_km_equivalent > 0){
         statistics.equivalences.push(`Tu Huella de Carbono equivale a recorrer ${car_km_equivalent} Km en automóvil.`);
      }

      if (equivalent_houses > 0) {
         statistics.equivalences.push('Tu Huella de Carbono equivale al promedio de emisiones del consumo electrico de ' + equivalent_houses + (equivalent_houses > 1 ? ' casas.' : ' casa.'));
      }
         

   	return { offsets, statistics, offset_by_user }
   },

   getOffsetByUser: function (user_offset, transport_data) {
   	let offset_by_user = [];

   	if(transport_data === null || walk_to_work === null) return offset_by_user;

      if('car' in transport_data){

         const { car: car_data } = transport_data;

         if(typeof user_offset.walk_to_work === "object"){
            const car_emission_offset = car(user_offset.walk_to_work.meters * 0.001, car_data.size, car_data.gasoline);
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
         
      }

   	return offset_by_user;
   }
  
}

module.exports = carbonFP