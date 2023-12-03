const { request, response } = require('express')
const carbonFP = require('../helpers/carbon_footprint')

const getElectricityCFP = (req = request, res = response) => {
	const { electricidad } = req.body;

	const carbon_footprint = carbonFP.getElectricity(electricidad);
	const carbonOffset = carbonFP.getCarbonOffset(carbon_footprint);

	res.status(201).json({
            carbon_footprint,
            carbonOffset
    })
}

module.exports = { getElectricityCFP }