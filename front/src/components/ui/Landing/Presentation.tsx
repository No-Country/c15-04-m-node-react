const Presentation = () => {
	return (
		<div className="px-6 py-2 md:w-3/4">
			<div className="bg-gradient-to-r from-sky-950 bg-slate-500 shadow-lg rounded-lg flex flex-col border border-gray-200 text-center w-full py-20 px-10">
				<h1 className="text-2xl text-zinc-200 font-bold mb-4 py-4 ">
					¿Qué es <span className="text-emerald-500">Green Trace</span>?
				</h1>
				<p className="text-md text-zinc-200 font-semibold pb-4">
					Green Trace es una aplicación que tiene como objetivo que conozcas tu emisión de CO2 en base a tus actividades
					diarias (transporte, ocio, trabajo, reciclaje y más). Si tu emisión es demasiado alta, te daremos consejos
					para reducirla y así poder, entre todos, tener un mundo mejor y más sostenible.
				</p>
			</div>
		</div>
	);
};

export default Presentation;
