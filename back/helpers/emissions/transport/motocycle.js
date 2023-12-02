const motocycleEmission = (kms = 0) => {
    const kgCoPerLt = 2.31
    const kmPerLt = 16
    const result = (kms / kmPerLt) * kgCoPerLt
    return Number(result.toFixed(2))
}

module.exports = motocycleEmission