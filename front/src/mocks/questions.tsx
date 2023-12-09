import { Question } from "@/types/quiz";
export const questions: Question[] = [
	{
		name: "residence",
		title: "¿En qué país reside?",
		type: "text",
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
						name: "transport.bus",
						title: "¿Cuántos kilómetros ha recorrido usando el bus?",
						type: "number",
					},
					{
						name: "transport.taxi",
						title: "¿Cuántos kilómetros ha recorrido usando taxi?",
						type: "number",
					},
					{
						name: "transport.metro",
						title: "¿Cuántos kilómetros ha recorrido usando el metro?",
						type: "number",
					},
				],
			},
		],
	},
	{
		name: "vehicle",
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
						name: "vehicle.car",
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
										name: "vehicle.car.kilometers",
										title: "¿Cuántos kilómetros recorre en promedio en automóvil?",
										type: "number",
									},
									{
										name: "vehicle.car.size",
										title: "¿De que tamaño considera es su automóvil?",
										type: "select",
										options: [
											{ value: "small", label: "Pequeño" },
											{ value: "medium", label: "Mediano" },
											{ value: "large", label: "Grande" },
										],
									},
									{
										name: "vehicle.car.fuel",
										title: "¿Qué tipo de combustible consume su automóvil?",
										type: "select",
										options: [
											{ value: "gasoline", label: "Gasolina" },
											{ value: "diesel", label: "Diesel" },
											{ value: "electric", label: "Eléctrico" },
										],
									},
								],
							},
						],
					},
					{
						name: "vehicle.motorcycle",
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
										name: "vehicle.motorcycle.kilometers",
										title: "¿Cuántos kilómetros recorre en promedio en motocicleta?",
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
						name: "bike.kilometers",
						title: "¿Cuántas veces haces uso de estos?",
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
						name: "walk.kilometers",
						title: "¿Cuántos metros caminas?",
						type: "number",
					},
				],
			},
		],
	},
	{
		name: "flight",
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
						name: "flight.kilometers",
						title: "¿De cuantos kilómetros fue el viaje?",
						type: "number",
					},
					{
						name: "flight.seats",
						title: "¿Qué cantidad de asientos ocupó?",
						type: "number",
					},
					{
						name: "flight.round",
						title: "¿Su viaje consistió en ida y vuelta o solo ida?",
						type: "select",
						options: [
							{ value: "round", label: "Ida y vuelta" },
							{ value: "one-way", label: "Solo ida" },
						],
					},
				],
			},
		],
	},
	{
		name: "electricity",
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
						name: "electricity.type",
						title: "¿Qué tipo de gas consume?",
						type: "select",
						options: [
							{ value: "natural", label: "Natural" },
							{ value: "propane", label: "Propano" },
						],
					},
					{
						name: "electricity.units",
						title: "¿En qué unidad de medida está cuantificada su consumo de gas?",
						type: "select",
						options: [
							{ value: "kg", label: "Kilogramos" },
							{ value: "m3", label: "Metros cúbicos" },
						],
					},
				],
			},
		],
	},
	{
		name: "electricity.consumption",
		title: "¿De acuerdo a su factura eléctrica, cuántos kWh (kilovatios/hora) consumió el ultimo mes?",
		type: "number",
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
