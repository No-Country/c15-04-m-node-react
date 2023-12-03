const gas = {
  type: {
    naturalGas: {
      cubicMeter_emission: 1.94,
      therm_emission: 5.50,
      fullname: 'gas_natural'
    },
    propane: {
    	therm_emission: 7.15,
    	cubicMeter_emission: 6.39,
    	fullname: 'gas_propano'
    }
  },
  getByType: function(fullname) {
    for(const type in this.type){
      if(this.type[type].fullname == fullname) return this.type[type];
    }
  }
}