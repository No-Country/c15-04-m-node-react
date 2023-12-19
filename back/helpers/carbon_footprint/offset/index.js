const { car } = require('../../emissions/transport')
const { countryEmission } = require('../electricity')

const treePerYear = 20;
const co2_per_km = Number(((car(1, 'small', true) + car(1, 'small', false) + car(1, 'medium', true) + car(1, 'medium', false) + car(1, 'big', true) + car(1, 'big', false)) / 6).toFixed(2));
const offset_per_led = function (country) {
	const led_emission = 0.0065 * countryEmission[country];
	const incandescent_emission = 0.05 * countryEmission[country];
	return incandescent_emission - led_emission;
}

module.exports = {
	carbonOffset: {
		treePerYear,
		co2_per_km,
		offset_per_led
	}
}