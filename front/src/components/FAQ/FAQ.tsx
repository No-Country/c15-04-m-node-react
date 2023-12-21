import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faq = [
	{
		question: "¿Qué es la huella de carbono?",
		answer:
			"Es el cálculo de los gases de efecto invernadero emitidos de manera directa o indirecta durante un periodo de tiempo, expresada en toneladas de CO2 emitidas.",
	},
	{
		question: "¿Qué es el cambio climático?",
		answer:
			"Es el cambio en los patrones climáticos atribuidos de forma directa o indirecta a la actividad humana. Van más allá de la variabilidad natural, alterando la composición de la atmósfera global. La emisión de gases de efecto invernadero, producidos principalmente por la actividad humana, son el principal causante del cambio climático.",
	},
	{
		question: "¿Qué es el agujero de la capa de ozono?",
		answer:
			"Es una parte de la atmosfera con importantes reducciones del nivel de ozono debido a las emisiones emitidas por los humanos. Como consecuencia, hay un incremento de la radiación ultravioleta, perjudicial para los seres vivos.",
	},
	{
		question: "¿Cuáles son los gases de efecto invernadero?",
		answer: (
			<ul className="list-disc ml-6 py-3 text-start">
				<li className="py-2">
					<strong>Dióxido de carbono (CO2):</strong> El más importante y asociado principalmente a las actividades
					humanas. Se debe al uso de la quema de combustibles fósiles en medios de transporte y procesos industriales,
					entre otros.
				</li>
				<li className="py-2">
					<strong>Metano (CH4):</strong> Producido por las bacterias que descomponen la materia orgánica. Se origina
					principalmente en zonas pantanosas, cultivos y emisiones del tracto intestinal del ganado.
				</li>
				<li className="py-2">
					<strong>Óxido nitroso (N2O):</strong> Producido principalmente en la agricultura intensiva, por el uso de
					fertilizantes nitrogenados. Las centrales térmicas, los motores de avión y los tubos de escape de los
					automóviles también provocan la emisión de estos gases.
				</li>
				<li>
					<strong>Clorofluorocarbonos (CFC):</strong> Se encuentran en pequeñas concentraciones, pero perjudican de
					forma potente. Se utilizan principalmente en procesos industriales, sistemas de refrigeración, aerosoles y
					aislantes eléctricos.
				</li>
			</ul>
		),
	},
	{
		question: "Tipos o niveles de emisiones de CO2",
		answer:
			"Cuando se calcula la huella de carbono se tienen en cuenta varios niveles de medición del CO2 emitido. El Alcance 1 hace referencia a los combustibles fósiles generados de manera directa. El Alcance 2 mide la energía emitida de manera indirecta por las instalaciones o por la producción. El Alcance 3 tiene en cuenta las emisiones de forma indirecta producidas por terceros.",
	},
	{
		question: "¿Qué es la regla de las tres erres? (Reducir, Reciclar, Reutilizar)",
		answer:
			"Es una iniciativa para fomentar la participación ciudadana con el objetivo de alargar la vida útil de los productos y promover el reciclaje. Este tipo de acciones logran reducir la huella de carbono individual y la generación de residuos.",
	},
];

export default function FAQ() {
	return (
		<div className="pt-32 min-h-[95vh]">
			<div className="flex justify-center">
				<h2 className="text-4xl font-bold py-5 items-center text-emerald-500 text-center">Preguntas Frecuentes</h2>
			</div>
			<div className="m-auto px-2 flex justify-between text-center pt-8">
				<Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
					{faq.map((item, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<div className="flex justify-center">
								<AccordionTrigger
									className="
								focus:text-green-500"
								>
									{item.question}
								</AccordionTrigger>
							</div>
							<AccordionContent className="px-6">{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	);
}
