const {
   airplaine,
   bus,
   car,
   colectivo,
   metro,
   motocycle
} = require('../transport')

const transport = ({
   airplaine: { kms: airKms, numberOfSeats, rounTrip },
   bus: { kms: busKms },
   car: { kms: carKms, size, gasoline },
   colectivo: { kms: colectivoKms },
   metro: { kms: metroKms },
   motocycle: { kms: motocycleKms }
}) => {
   const sum = (
      airplaine(airKms, numberOfSeats, rounTrip) +
      bus(busKms) +
      car(carKms, size, gasoline) +
      colectivo(colectivoKms) +
      metro(metroKms) +
      motocycle(motocycleKms)
   ).toFixed(2)

   return `${sum} KgCo2`
}

module.exports = transport
