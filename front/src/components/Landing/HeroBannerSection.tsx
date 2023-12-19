import Banner from "../../assets/img/banner-2.png";
import { Button } from "../ui/button";

const HeroBannerSection = () => {
	return (
		<div className="relative">
			<div
				className="absolute top-0 left-0 w-full h-full bg-bottom bg-cover -z-10"
				style={{
					backgroundImage: `url(${Banner})`,
				}}
			></div>
			<div className="bg-opacity-80 h-screen">
				<div className="container mx-auto flex justify-center items-start h-full max-w-5xl">
					<div className="text-center mt-16">
						<h2 className="text-emerald-500 text-4xl font-bold mb-2">Green Trance</h2>
						<h1 className="text-4xl font-semibold text-black md:text-5xl">
							Calcula y gestiona tu huella de <span className="text-emerald-500">Carbono</span>
						</h1>
						<p className="mt-4 text-black text-md md:text-lg">
							Descubre tu impacto en el planeta y aprende cómo reducirlo con nuestro asesoramiento experto. Únete a la
							comunidad que está tomando pasos significativos hacia la sostenibilidad.
						</p>
						<Button className="mt-8 bg-primary dark:bg-green-600 py-3 px-6 text-lg font-medium dark:hover:bg-green-600 hover:bg-green-600 transition duration-300 h-auto text-white">
							Evalúa tu Huella Ecológica
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerSection;
