import Banner from "../../assets/img/banner.webp";
import { Button } from "../ui/button";

const HeroBannerSection = () => {
	return (
		<div className="bg-cover bg-center relative">
			<div
				className="absolute top-0 left-0 w-full h-full bg-center bg-cover -z-10 bg-fixed"
				style={{
					backgroundImage: `url(${Banner})`,
				}}
			></div>
			<div className="bg-black bg-opacity-50 h-screen md:h-[75vh]">
				<div className="container mx-auto flex justify-center items-center h-full">
					<div className="text-center">
						<h2 className="text-4xl font-semibold text-white md:text-6xl">
							Calcula tu Huella <span className="text-green-500">Green Trance</span>
						</h2>
						<p className="mt-4 text-white text-lg md:text-xl">
							Descubre tu impacto en el planeta y aprende cómo reducirlo con nuestro asesoramiento experto. Únete a la
							comunidad que está tomando pasos significativos hacia la sostenibilidad.
						</p>
						<Button className="mt-8 bg-green-500 text-white py-3 px-6 text-lg font-medium hover:bg-green-600 transition duration-300 h-auto">
							Evalúa tu Huella Ecológica
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerSection;
