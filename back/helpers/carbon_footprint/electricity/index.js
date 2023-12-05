/* Factor de Emision por pais, medido en KgCO2eq actualizado 2023 */

/* America del Norte */
const mexico = 0.411;

/* America Central */
const costa_rica = 0.23;
const guatemala = 0.215;
const honduras = 0.257;
const nicaragua = 0.170;
const panama = 0.127;
const republica_dominicana = 0.559;
const salvador = 0.287;

/* America del Sur */
const argentina = 0.334;
const bolivia = 0.277;
const brasil = (0.138 + 0.43 + 0.78 + 0.67) / 4; // Norte, noreste, centro y sur de Brasil
const chile = 0.116;
const colombia = 0.140;
const peru = 0.172;
const uruguay = 0.78;
const ecuador = paraguay = venezuela = (argentina + bolivia + brasil + chile + colombia + peru + uruguay + costa_rica + guatemala + honduras + nicaragua + panama + republica_dominicana + salvador) / 14;

module.exports = {
	countryEmission: {
		'mexico': mexico,
		'costa_rica': costa_rica,
		'guatemala': guatemala,
		'honduras': honduras,
		'nicaragua': nicaragua,
		'panama': panama,
		'republica_dominicana': republica_dominicana,
		'salvador': salvador,
		'argentina': argentina,
		'bolivia': bolivia,
		'brasil': brasil,
		'chile': chile,
		'colombia': colombia,
		'peru': peru,
		'uruguay': uruguay,
		'ecuador': ecuador,
		'paraguay': paraguay,
		'venezuela': venezuela
	}
};