const { request, response } = require('express')
const carbonFP = require('../helpers/carbon_footprint')

const electricityCalculator = (req = request, res = response) => {
	const { electricidad } = req.body;

	const carbon_footprint = carbonFP.getElectricity(electricidad);
	const carbonOffset = carbonFP.getCarbonOffset(carbon_footprint);

	res.status(201).json({
            carbon_footprint,
            carbonOffset
    })
}

const gasCalculator = (req = request, res = response) => {
	const { gas } = req.body;

	const carbon_footprint = carbonFP.getGas(gas);
	const carbonOffset = carbonFP.getCarbonOffset(carbon_footprint);

	res.status(201).json({
            carbon_footprint,
            carbonOffset
    })
}

const carbonOffsetCalculator = (req = request, res = response) => {
	const { huella_carbono } = req.body;
	const carbonOffset = carbonFP.getCarbonOffset(huella_carbono);

	res.status(201).json({
            carbonOffset
    })
}

module.exports = { 
	electricityCalculator,
	gasCalculator,
	carbonOffsetCalculator 
}