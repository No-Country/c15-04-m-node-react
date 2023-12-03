const car = require('./car')

const colectivoEmission = (kms = 0) => Number((car(kms, 'medium') / 3.2).toFixed(2))

module.exports = colectivoEmission