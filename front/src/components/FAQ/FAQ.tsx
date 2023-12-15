import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
	return (
		<div className="mx-2">
			<h2>Preguntas Frecuentes</h2>
			<Accordion type="single" collapsible>
				<AccordionItem value="item-1">
					<AccordionTrigger
						className="
                focus:text-green-500"
					>
						¿Qué es la huella de carbono?
					</AccordionTrigger>
					<AccordionContent>
						Es el cálculo de los gases de efecto invernadero emitidos de manera directa o indirecta durante un periodo
						de tiempo, expresada en toneladas de CO2 emitidas.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger
						className="
                focus:text-green-500"
					>
						¿Qué es el cambio climático?
					</AccordionTrigger>
					<AccordionContent>
						Es el cambio en los patrones climáticos atribuidos de forma directa o indirecta a la actividad humana. Van
						más allá de la variabilidad natural, alterando la composición de la atmósfera global. La emisión de gases de
						efecto invernadero, producidos principalmente por la actividad humana, son el principal causante del cambio
						climático.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger
						className="
                focus:text-green-500"
					>
						¿Qué es el agujero de la capa de ozono?
					</AccordionTrigger>
					<AccordionContent>
						Parte de la atmosfera con importantes reducciones del nivel de ozono debido a las emisiones emitidas por los
						humanos. Como consecuencia, hay un incremento de la radiación ultravioleta, perjudicial para los seres
						vivos.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-4">
					<AccordionTrigger
						className="
                focus:text-green-500"
					>
						¿Cuáles son los gases de efecto invernadero?
					</AccordionTrigger>
					<AccordionContent>
						Los principales gases de efecto invernadero son:
						<ul>
							<li>
								Dióxido de carbono (CO2). Es el más importante y asociado principalmente a las actividades humanas. Se
								debe al uso de la quema de combustibles fósiles en medios de transporte y procesos industriales, entre
								otros.
							</li>
							<li>
								Metano (CH4). Es producido por las bacterias que descomponen la materia orgánica. Se originan,
								principalmente, en zonas pantanosas, cultivos y emisiones del tracto intestinal del ganado.
							</li>
							<li>
								Óxido nitroso (N2O). Producido principalmente en la agricultura intensiva, por el uso de fertilizantes
								nitrogenados. Las centrales térmicas, los motores de avión y los tubos de escape de los automóviles
								también provocan la emisión de estos gases.
							</li>
							<li>
								{" "}
								Clorofluorocarbonos (CFC). Se encuentran en pequeñas concentraciones, pero perjudican de forma potente.
								Se utiliza principalmente en procesos industriales, sistemas de refrigeración, aerosoles y aislantes
								eléctricos.
							</li>
						</ul>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-5">
					<AccordionTrigger
						className="
                focus:text-green-500"
					>
						Tipos o niveles de emisiones de CO2
					</AccordionTrigger>
					<AccordionContent>
						Cuando se calcula la huella de carbono se tienen en cuenta varios niveles de medición del CO2 emitido. El
						Alcance 1 hace referencia a los combustibles fósiles generados de manera directa. El Alcance 2 mide la
						energía emitida de manera indirecta por las instalaciones o por la producción. El Alcance 3 tiene en cuenta
						las emisiones de forma indirecta producidas por terceros.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-6">
					<AccordionTrigger
						className="
                focus:text-green-500"
					>
						¿Qué es la regla de las tres erres? (Reducir, Reciclar, Reutilizar)
					</AccordionTrigger>
					<AccordionContent>
						Iniciativa para fomentar la participación ciudadana con el objetivo de alargar la vida útil de los productos
						y promover el reciclaje. Este tipo de acciones logran reducir la huella de carbono individual y la
						generación de residuos.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
export default FAQ;
