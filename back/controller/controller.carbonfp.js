const { request, response } = require('express')
const { countryEmission } = require('../helpers/carbon_footprint')

const getElectricityCFP = (req = request, res = response) => {
	const { kwh, pais } = req.body;
	const hc = kwh * countryEmission[pais]; // KgCO2 * 0.001 -> tCO2 

	res.status(201).json({
            message: `Huella de Carbono: ${hc} kgCO2`,
            hc
    })
}

module.exports = { getElectricityCFP }