const {
   airplane,
   bus,
   car,
   colectivo,
   metro,
   motorcycle
} = require('../transport')

const transport = ({
   airplane: { kms: airKms, numberOfSeats, rounTrip },
   bus: { kms: busKms },
   car: { kms: carKms, size, gasoline },
   colectivo: { kms: colectivoKms },
   metro: { kms: metroKms },
   motorcycle: { kms: motorcycleKms }
}) => {
   const sum = (
      airplane(airKms, numberOfSeats, rounTrip) +
      bus(busKms) +
      car(carKms, size, gasoline) +
      colectivo(colectivoKms) +
      metro(metroKms) +
      motorcycle(motorcycleKms)
   ).toFixed(2)

   return `${sum} KgCo2`
}

module.exports = transport
