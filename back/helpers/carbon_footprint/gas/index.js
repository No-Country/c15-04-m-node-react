const gas = {
    naturalGas: {
      cubic_meter: 1.94,
      therm: 5.50,
      type: 'gas_natural'
    },
    propane: {
    	therm: 7.15,
    	cubic_meter: 6.39,
    	type: 'gas_propano'
    },
  getEmissionFactor: function(type, unit) {
    for(const prop in this){
      if(typeof this[prop] === 'function') continue;
      if(this[prop].type == type) return this[prop][unit];
    }
  }
}

module.exports = gas