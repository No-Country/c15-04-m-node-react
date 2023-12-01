const electricityCarbonFP = require('./electricity')
const { carbonOffset } = require('./offset')

class carbonFP {
	constructor(){
		this.electricity = null;
	}

	setElectricityParameters(kwh, renewableSource, country){
		this.electricity = new electricityCarbonFP(kwh, renewableSource, country);
	}

	getElectricityCarbonFP(){
		return this.electricity.getCarbonFootprint(); //KgCO2eq * 0.001 -> tCO2
	}

	getTotalCarbonFootprint(){}

	getTotalCarbonOffset(){}

	getElectricityCarbonOffset(){
		if(this.electricity == null) return;

		const ehc = this.getElectricityCarbonFP();
		let minTrees = 0;

		if(ehc != 0){
			minTrees = Math.round(ehc / carbonOffset.treePerYear);
		}

		return { ehc, minTrees }
	}
}

module.exports = carbonFP