const { request, response } = require('express')
const carbonFP = require('../helpers/carbon_footprint')
const transport = require('../helpers/emissions/calculator/transport')

const electricityCalculator = (req = request, res = response) => {
	const { electricidad } = req.body;

	const carbon_footprint = carbonFP.getElectricity(electricidad);

	res.status(201).json({
            carbon_footprint,
    })
}

const gasCalculator = (req = request, res = response) => {
	const { gas } = req.body;

	const carbon_footprint = carbonFP.getGas(gas);

	res.status(201).json({
            carbon_footprint
    })
}

const transportCalculator = (req = request, res = response) => {
	const { transporte } = req.body;
	const carbon_footprint = transport(transporte);

	res.status(201).json({
            carbon_footprint
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
	transportCalculator,
	carbonOffsetCalculator 
}