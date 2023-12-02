const {
    airplaine,
    bus,
    car,
    colectivo,
    metro,
    motocycle
 } = require('../transport')

 const transport = transporte => {
    const { kms: airKms, numberOfSeats, rounTrip } = transporte.airplaine
    const { kms: busKms } = transporte.bus
    const { kms: carKms, size, gasoline } = transporte.car
    const { kms: colectivoKms } = transporte.colectivo
    const { kms: metroKms } = transporte.metro
    const { kms: motocycleKms } = transporte.motocycle
    const airEmission = airplaine(airKms, numberOfSeats, rounTrip)
    const busEmission = bus(busKms)
    const carEmission = car(carKms, size, gasoline)
    const colectivoEmission = colectivo(colectivoKms)
    const metroEmission = metro(metroKms)
    const motocycleEmission = motocycle(motocycleKms)
    const sum = airEmission + busEmission + carEmission + colectivoEmission + metroEmission + motocycleEmission
    return sum.toFixed(2) + 'KgCo2'
 }

module.exports = transport