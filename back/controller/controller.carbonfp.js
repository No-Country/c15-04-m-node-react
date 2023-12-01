const { request, response } = require('express')
const carbonFP = require('../helpers/carbon_footprint')

const getElectricityCFP = (req = request, res = response) => {
	const { kwh, energia_renovable, pais } = req.body;
	let carbonReport = new carbonFP();

	carbonReport.setElectricityParameters(kwh, energia_renovable, pais);
	const carbonOffset = carbonReport.getElectricityCarbonOffset();

	res.status(201).json({
            carbonOffset
    })
}

module.exports = { getElectricityCFP }