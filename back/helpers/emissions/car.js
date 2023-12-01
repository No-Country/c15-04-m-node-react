const carEmissions = (kms, gasoline = true) => {
    const dieselEmissionPerLt = 2.68
    const gasolineEmissionPerlt = 2.31 
    const dieselEfficiency = 19
    const gasolineEfficiency = 12
    const liters = kms / (gasoline ? gasolineEfficiency : dieselEfficiency)
    const result = liters * (gasoline ? gasolineEmissionPerlt : dieselEmissionPerLt)
    return Number(result.toFixed(1))
}

module.exports = carEmissions


