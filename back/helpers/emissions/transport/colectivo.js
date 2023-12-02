const car = require('./car')

const colectivoEmission = (kms = 0) => Number((car(kms, 'medium') / 4).toFixed(2))

module.exports = colectivoEmission