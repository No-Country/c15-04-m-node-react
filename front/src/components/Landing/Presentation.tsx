const Presentation = () => {
	return (
		<div className="mt-4">
			<div className="bg-gradient-to-r from-sky-950 bg-slate-500 shadow-lg rounded-lg flex flex-col border border-gray-200 text-center w-full md:py-20 md:px-10 px-5 py-5">
				<h1 className="text-2xl text-zinc-200 font-bold mb-4 py-4 ">
					¿Qué es <span className="text-emerald-500">Green Trace</span>?
				</h1>
				<p className="text-md text-zinc-200 font-semibold pb-4">
					Green Trace es una aplicación diseñada para que conozcas tu emisión de CO2 según tus actividades diarias, como
					transporte, ocio, trabajo, reciclaje y más. Si tu emisión es elevada, te proporcionaremos consejos para
					reducirla. ¡Trabajemos juntos para lograr un mundo mejor y más sostenible!
				</p>
			</div>
		</div>
	);
};

export default Presentation;
