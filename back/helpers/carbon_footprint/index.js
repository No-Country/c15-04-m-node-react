/**  
 *  hc de Consumo electrico (KgCO2eq)
 *	hc = consumo electrico (kwh) x countryEmission
**/
const { countryEmission } = require('./electricity');
const { country } = require('./enum/country');

module.exports = {
  countryEmission,
  country
};