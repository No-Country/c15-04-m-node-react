const Presentation = () => {
	return (
		<div className="px-6 py-2 md:w-3/4">
			<div className="bg-white shadow-lg rounded-lg p-4 flex flex-col border border-gray-200 text-center w-full">
				<h1 className="text-2xl font-bold mb-4 py-4 ">
					¿Qué es <span className="text-emerald-500">Green Trace</span>?
				</h1>
				<p className="text-md font-semibold pb-4">
					Green Trace es una aplicación que tiene como objetivo que conozcas tu emisión de CO2 en base a tus actividades
					diarias (transporte, oscio, trabajo, reciclaje y mas). Si tu emision es demasiado alto te daremos consejos
					para bajarla y asi poder, entre todos, tener un mundo mejor y mas sustentable.
				</p>
			</div>
		</div>
	);
};

export default Presentation;
