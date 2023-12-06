const metroEmission = (kms = 0) => {
  const emissionPerKwh = 0.22
  const performancePer100km = 15
  const result = (kms / 100) * performancePer100km * emissionPerKwh
  return Number(result.toFixed(2))
}

module.exports = metroEmission