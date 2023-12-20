const FeaturedServicesSection = () => {
	return (
		<section id="featured-services" className="pb-12">
			<div className="flex flex-wrap -my-4 md:-mx-6">
				<div className="lg:w-1/3 md:w-1/2 p-2 group cursor-pointer">
					<div className="border-2 p-6 rounded-lg group-hover:border-green-500 transition-colors">
						<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 mb-4">
							<i className="bi bi-laptop"></i>
						</div>
						<h2 className="text-lg font-medium title-font mb-2 group-hover:text-green-500 transition-colors">
							Evalúa tu Impacto
						</h2>
						<p className="leading-relaxed text-base">
							Utiliza nuestras herramientas intuitivas para medir tu huella de carbono personal o empresarial y obtener
							un informe detallado sobre tus emisiones.
						</p>
					</div>
				</div>
				<div className="lg:w-1/3 md:w-1/2 p-2 group cursor-pointer">
					<div className="border-2 p-6 rounded-lg group-hover:border-green-500 transition-colors">
						<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 mb-4">
							<i className="bi bi-briefcase"></i>
						</div>
						<h2 className="text-lg font-medium title-font mb-2 group-hover:text-green-500 transition-colors">
							Consejos Prácticos
						</h2>
						<p className="leading-relaxed text-base">
							Descubre estrategias y consejos sencillos para reducir tu consumo de energía y emisiones de CO2 en la vida
							cotidiana o en tu negocio.
						</p>
					</div>
				</div>
				<div className="lg:w-1/3 md:w-1/2 p-2 group cursor-pointer">
					<div className="border-2 p-6 rounded-lg group-hover:border-green-500 transition-colors">
						<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-500 mb-4">
							<i className="bi bi-calendar4-week"></i>
						</div>
						<h2 className="text-lg font-medium title-font mb-2 group-hover:text-green-500 transition-colors">
							Reduce y Compensa
						</h2>
						<p className="leading-relaxed text-base">
							Encuentra opciones para compensar tus emisiones, como proyectos de reforestación y energías renovables,
							que contribuyen a la mitigación del cambio climático.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedServicesSection;
