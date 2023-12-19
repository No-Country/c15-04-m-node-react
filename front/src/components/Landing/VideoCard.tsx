const VideoCard = () => {
	return (
		<div className="flex flex-wrap items-center justify-center mt-12">
			<div className="md:w-1/2 aspect-video w-full">
				<iframe
					className="w-full h-full"
					src="https://www.youtube.com/embed/nQ1pPLb1Fo4"
					title="¿Qué es la Huella de Carbono?"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<div className="flex flex-col justify-center align-center md:w-1/2 md:pl-8">
				<h1 className="text-2xl font-bold py-4">Pero, ¿Qué es la huella de carbono?</h1>
				<p className="text-md font-semibold py-2">
					Es un indicador ambiental que pretende reflejar la totalidad de gases de{" "}
					<span className="text-emerald-500">efecto invernadero</span> emitidos por efecto directo o indirecto de un
					individuo, organización, evento o producto.
				</p>
			</div>
		</div>
	);
};

export default VideoCard;
