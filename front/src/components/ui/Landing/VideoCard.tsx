import VideoPlayer from "@/components/Videoplayer/VideoPlayer";
import react from "react";

const VideoCard = () => {
	return (
		<div>
			<div className="mobilecard md:hidden flex justify-center p-10 mb-4">
				<div className="bg-white shadow-lg rounded-lg p-4 flex border border-gray-200 w-fulljustify-between">
					<div>
						<div className=" flex flex-col justify-center">
							<h2 className="text-l font-bold flex justify-center mb-4">Pero, ¿Qué es la huella de carbono?</h2>
							<p className="text-sm mb-4">
								Es un indicador ambiental que pretende reflejar la totalidad de gases de efecto invernadero emitidos por
								efecto directo o indirecto de un individuo, organización, evento o producto.
							</p>
							<div>
								<VideoPlayer embedId="nQ1pPLb1Fo4" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="desktopcard hidden md:flex justify-center p-10 mb-4">
				<div className="bg-white shadow-lg rounded-lg p-4 flex border border-gray-200 w-1/2 ml-4">
					<div>
						<div className=" flex ">
							<VideoPlayer embedId="nQ1pPLb1Fo4" />
							<div className="ml-4">
								<h2 className="text-l font-bold flex justify-center mb-4">Pero, ¿Qué es la huella de carbono?</h2>
								<p className="text-sm mb-4">
									Es un indicador ambiental que pretende reflejar la totalidad de gases de efecto invernadero emitidos
									por efecto directo o indirecto de un individuo, organización, evento o producto.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
