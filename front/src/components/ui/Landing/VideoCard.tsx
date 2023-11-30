import ReactPlayer from "react-player";

const VideoCard = () => {
	return (
		<div className="px-6 py-2 md:w-3/4 ">
			<div className="flex bg-white shadow-lg rounded-lg p-4 x border border-gray-200 text-center flex-col md:flex-row">
				<div className="block sm:hidden">
					<ReactPlayer url="https://www.youtube.com/watch?v=nQ1pPLb1Fo4" width={"100%"} height={"100%"} />
				</div>
				<div className="hidden md:block">
					<ReactPlayer url="https://www.youtube.com/watch?v=nQ1pPLb1Fo4" />
				</div>
				<div className="px-6 flex flex-col justify-center align-center">
					<h1 className="text-2xl font-bold py-4">Pero, ¿Qué es la huella de carbono?</h1>
					<p className="text-md font-semibold py-2">
						Es un indicador ambiental que pretende reflejar la totalidad de gases de{" "}
						<span className="text-emerald-500">efecto invernadero</span> emitidos por efecto directo o indirecto de un
						individuo, organización, evento o producto.
					</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
