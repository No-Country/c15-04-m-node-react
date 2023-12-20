/* 
{
    "carbonOffset": {
        "offsets": [
            {
                "led_equivalent": 574,
                "message": "Se necesitarían cambiar 574 bombillos incandescentes por bombillas LED para compensar tu Huella de Carbono."
            },
            {
                "message": "Vaya, parece que caminar no es tu actividad física preferida. Pero aún así, GreenTrace te recomienda que camines más para reducir en gran medida tus emisiones de Co2. Así que, ¡A mover esas piernitas!"
            },
            {
                "message": "Hemos visto que andar en bicicleta o monopatín es una actividad que no llevas a cabo. Está actividad, además de reducir tus emisiones de Co2, aporta muchos beneficios para tu salud e incluso está comprobado que usar la bicicleta con frecuencia aumenta la felicidad de las personas. Los monopatines, de la misma manera que las bicicletas, te ayudarán a reducir tus emisiones de Co2 debido a que el combustible no es un requisito para funcionar y muchas de ellas operan con motores eléctricos. Te recomendamos que incluyas en tus rutinas habituales, el uso de bicicletas y/o monopatines."
            }
        ],
        "statistics": {
            "carbon_footprint": {
                "transport": {
                    "land": 0,
                    "air": 0,
                    "total": 0
                },
                "gas": 0,
                "electricity": 8.35,
                "total": 8.35
            },
            "emission_percentage": {
                "transport_perc": {
                    "air_perc": 0,
                    "land_perc": 0,
                    "total": 0
                },
                "gas_perc": 0,
                "electricity_perc": "100.00",
                "higher_emission": {
                    "category": "electricity",
                    "value": "100.00"
                }
            },
            "equivalences": [
                "Tu Huella de Carbono equivale a recorrer 40 Km en automóvil."
            ]
        },
        "offset_by_user": []
    }
}

*/

/* 

{
    "carbonOffset": {
        "offsets": [
            {
                "minTrees": 12,
                "message": "Con tu Huella de Carbono, necesitarías plantar un mínimo de 12 arboles para compensarla en un año."
            },
            {
                "led_equivalent": 17205,
                "message": "Se necesitarían cambiar 17205 bombillos incandescentes por bombillas LED para compensar tu Huella de Carbono."
            }
        ],
        "statistics": {
            "carbon_footprint": {
                "transport": {
                    "land": 12.48,
                    "air": 100,
                    "total": 112.48
                },
                "gas": 137.5,
                "electricity": 0,
                "total": 249.98000000000002
            },
            "emission_percentage": {
                "transport_perc": {
                    "air_perc": "40.00",
                    "land_perc": "4.99",
                    "total": "45.00"
                },
                "gas_perc": "55.00",
                "electricity_perc": 0,
                "higher_emission": {
                    "category": "gas",
                    "value": "55.00"
                }
            },
            "equivalences": [
                "Tu Huella de Carbono equivale a recorrer 1190 Km en automóvil.",
                "Tu Huella de Carbono equivale al promedio de emisiones del consumo electrico de 2 casas."
            ]
        },
        "offset_by_user": [
            "Lamentablemente, de acuerdo a la cantidad de metros que has caminado, no has logrado compensar las emisiones de tú automóvil. Pero no te preocupes, te recomendamos que camines mucho más y reduzcas el uso de tú automóvil.",
            "Has hecho uso de la bicicleta y/o monopatín, pero esto no ha sido suficiente para compensar parte de las emisiones de tú automóvil. Pero vemos que es un gran paso para reducir tus emisiones, es por eso que te recomendamos que hagas un mayor uso de ellos."
        ]
    }
}
*/

export interface CarbonOffsetResponse {
	carbonOffset: CarbonOffset;
}

export interface CarbonOffset {
	offsets: Offset[];
	statistics: Statistics;
	offset_by_user: string[];
}

export interface Offset {
	led_equivalent?: number;
	message: string;
}

export interface Statistics {
	carbon_footprint: CarbonFootprint;
	emission_percentage: EmissionPercentage;
	equivalences: string[];
}

export interface CarbonFootprint {
	transport: Transport;
	gas: number;
	electricity: number;
	total: number;
}

export interface Transport {
	land: number;
	air: number;
	total: number;
}

export interface EmissionPercentage {
	transport_perc: TransportPerc;
	gas_perc: number;
	electricity_perc: string;
	higher_emission: HigherEmission;
}

export interface TransportPerc {
	air_perc: number;
	land_perc: number;
	total: number;
}

export interface HigherEmission {
	category: string;
	value: string;
}
