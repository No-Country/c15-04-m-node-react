const busEmission = (kms = 0) => {
  const avgKmPerLt = 3
  const kgCoPerLt = 2.68
  const avgSeats = 20
  const result = ((kms / avgKmPerLt) * kgCoPerLt) / avgSeats
  return Number(result.toFixed(2))
}

module.exports = busEmission