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
	let carbonOffset;

	if('carbon_footprint' in req.body){
		const { electricity, gas, transport } = req.body.carbon_footprint;
		carbonOffset = carbonFP.getCarbonOffset(transport, gas, electricity);
	} else {

		const { residence: pais, bike, walk: walk_to_work, project } = req.body;
		let { transport: transport_data, gas: gas_data, electricity: electricity_data } = req.body;
		electricity_data['pais'] = pais;

		const transport_cfp = carbonFP.getTransport(transport_data);
		const gas_cfp = carbonFP.getGas(gas_data);
		const electricity_cfp = carbonFP.getElectricity(electricity_data);

		carbonOffset = carbonFP.getCarbonOffset(transport_cfp, gas_cfp, electricity_cfp);
		carbonOffset.offset_by_user = carbonFP.getOffsetByUser(walk_to_work, transport_data);
	}

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