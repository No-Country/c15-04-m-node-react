const carEmission = (kms = 0, size = 'small', gasoline = true) => {
    let efficiency
    switch (size) {
        case 'small':
            efficiency = gasoline ? 12 : 21
            break
        case 'medium':
            efficiency = gasoline ? 9 : 18
            break
        case 'big':
            efficiency = gasoline ? 6 : 15
            break
        default:
            efficiency = 0;
            break
    }
    const emissionPerLt = gasoline ? 2.31 : 2.68
    const liters = kms / efficiency
    const result = liters * emissionPerLt
    return Number(result.toFixed(2))
}

module.exports = carEmission


