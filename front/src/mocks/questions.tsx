import { Question } from "@/types/quiz";

const countriesOptions = [
	{ value: "argentina", label: "Argentina" },
	{ value: "bolivia", label: "Bolivia" },
	{ value: "brasil", label: "Brasil" },
	{ value: "chile", label: "Chile" },
	{ value: "colombia", label: "Colombia" },
	{ value: "costa_rica", label: "Costa Rica" },
	{ value: "ecuador", label: "Ecuador" },
	{ value: "el_salvador", label: "El Salvador" },
	{ value: "guatemala", label: "Guatemala" },
	{ value: "honduras", label: "Honduras" },
	{ value: "mexico", label: "México" },
	{ value: "nicaragua", label: "Nicaragua" },
	{ value: "panama", label: "Panamá" },
	{ value: "paraguay", label: "Paraguay" },
	{ value: "peru", label: "Perú" },
	{ value: "republica_dominicana", label: "República Dominicana" },
	{ value: "uruguay", label: "Uruguay" },
	{ value: "venezuela", label: "Venezuela" },
];

export const questions: Question[] = [
	{
		name: "residence",
		title: "¿En qué país reside?",
		type: "select",
		label: "Seleccione un país",
		options: countriesOptions,
	},
	{
		name: "transport",
		title: "¿Utiliza el transporte público?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
		conditions: [
			{
				triggerAnswer: "yes",
				questions: [
					{
						name: "transport.public",
						title: "¿Cuántas veces utiliza el transporte público?",
						type: "number",
					},
					{
						name: "transport.bus.kms",
						title: "¿Cuántos kilómetros recorre en promedio usando el bus cada mes?",
						type: "number",
					},
					{
						name: "transport.colectivo.kms",
						title: "¿Cuántos kilómetros recorre en promedio usando taxi cada mes?",
						type: "number",
					},
					{
						name: "transport.metro.kms",
						title: "¿Cuántos kilómetros recorre en promedio usando el metro cada mes?",
						type: "number",
					},
				],
			},
		],
	},
	{
		name: "demo",
		title: "¿Posee vehículo personal, alquilado o prestado?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
		conditions: [
			{
				triggerAnswer: "yes",
				questions: [
					{
						name: "transport.car",
						title: "¿Posee automóvil?",
						type: "radio",
						options: [
							{ value: "yes", label: "Si" },
							{ value: "no", label: "No" },
						],
						conditions: [
							{
								triggerAnswer: "yes",
								questions: [
									{
										name: "transport.car.kms",
										title: "¿Cuántos kilómetros recorre aproximadamente con su automóvil al mes?",
										type: "number",
									},
									{
										name: "transport.car.size",
										title: "¿De que tamaño considera es su automóvil?",
										type: "select",
										label: "Seleccione una opción",
										options: [
											{ value: "small", label: "Pequeño" },
											{ value: "medium", label: "Mediano" },
											{ value: "large", label: "Grande" },
										],
									},
									{
										name: "transport.car.fuel",
										title: "¿Qué tipo de combustible consume su automóvil?",
										type: "select",
										label: "Seleccione una opción",
										dataType: "boolean",
										options: [
											{
												value: true,
												label: "Gasolina",
											},
											{
												value: false,
												label: "Diesel",
											},
											// { value: "gasoline", label: "Gasolina" },
											// { value: "diesel", label: "Diesel" },
											// { value: "electric", label: "Eléctrico" },
										],
									},
								],
							},
						],
					},
					{
						name: "transport.motorcycle",
						title: "¿Posee motocicleta?",
						type: "radio",
						options: [
							{ value: "yes", label: "Si" },
							{ value: "no", label: "No" },
						],
						conditions: [
							{
								triggerAnswer: "yes",
								questions: [
									{
										name: "transport.motorcycle.kms",
										title: "¿Cuántos kilómetros viaja en su motocicleta al mes?",
										type: "number",
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "bike",
		title: "¿Hace uso de bicicletas/monopatines para trasladarse a lugares donde lleva a cabo actividades diarias?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
		conditions: [
			{
				triggerAnswer: "yes",
				questions: [
					{
						name: "bike.meters",
						title: "¿Cuántos metros recorre en promedio en bicicleta/monopatín al mes?",
						type: "number",
					},
				],
			},
		],
	},
	{
		name: "walk",
		title: "¿Has caminado algunas veces hasta tu lugar de trabajo o donde llevas a cabo actividades cotidianas?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
		conditions: [
			{
				triggerAnswer: "yes",
				questions: [
					{
						name: "walk.meters",
						title: "¿Cuántos kms camina al mes?",
						type: "number",
					},
				],
			},
		],
	},
	{
		name: "transport.airplane",
		title: "¿Ha realizado algún viaje en avión hacia otro estado, país o continente?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
		conditions: [
			{
				triggerAnswer: "yes",
				questions: [
					{
						name: "transport.airplane.kms",
						title: "¿De cuantos kilómetros fue el viaje?",
						type: "number",
					},
					{
						name: "transport.airplane.numberOfSeats",
						title: "¿Qué cantidad de asientos ocupó?",
						type: "number",
					},
					{
						name: "transport.airplane.rounTrip",
						title: "¿Su viaje consistió en ida y vuelta o solo ida?",
						type: "select",
						label: "Seleccione una opción",
						options: [
							{ value: true, label: "Ida y vuelta" },
							{ value: false, label: "Solo ida" },
						],
					},
				],
			},
		],
	},
	{
		name: "gas",
		title: "¿Ocupa el uso de gas doméstico?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
		conditions: [
			{
				triggerAnswer: "yes",
				questions: [
					{
						name: "gas.type",
						title: "¿Qué tipo de gas consume?",
						type: "select",
						label: "Seleccione una opción",
						options: [
							{ value: "natural", label: "Natural" },
							{ value: "propane", label: "Propano" },
						],
					},
					{
						name: "gas.units",
						title: "¿En qué unidad de medida está cuantificada su consumo de gas?",
						type: "select",
						label: "Seleccione una opción",
						options: [
							{ value: "therm", label: "Termias" },
							{ value: "cubic_meter", label: "Metros cúbicos" },
						],
					},
					{
						name: "gas.consumption",
						title: "¿Cuánto consume de gas?",
						type: "number",
					},
				],
			},
		],
	},
	{
		name: "electricity.consumption",
		title: "En promedio, ¿cuántos kWh (kilovatios/hora) de electricidad consume cada mes?",
		type: "number",
	},
	{
		name: "electricity.renewable_source",
		title: "¿Su energía eléctrica proviene de fuentes renovables?",
		type: "radio",
		dataType: "boolean",
		options: [
			{ value: true, label: "Si" },
			{ value: false, label: "No" },
		],
	},
	{
		name: "project",
		title: "¿Ha llevado a cabo últimamente algún proyecto en pro del medio ambiente?",
		type: "radio",
		options: [
			{ value: "yes", label: "Si" },
			{ value: "no", label: "No" },
		],
	},
];
