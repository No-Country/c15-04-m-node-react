/*
	Energias renovables: Solar, Hidraulica, Eolica, Biomasa, Mareomotriz, Geotermica
*/
const { countryEmission } = require('./countryEmission')

class electricityCarbonFP {
	constructor(kwh, renewableSource, country){
		this.kwh = kwh;
		this.renewableSource = renewableSource;
		this.country = country;
		this.countryEmission = countryEmission[country];
	}

	getCarbonFootprint(){
		if(this.renewableSource) return 0;

		return this.kwh * this.countryEmission; 
	}
}

module.exports = electricityCarbonFP