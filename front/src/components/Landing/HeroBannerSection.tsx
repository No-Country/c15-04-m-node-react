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
			<div className="bg-green-950 bg-opacity-80 h-screen md:h-[75vh]">
				<div className="container mx-auto flex justify-center items-center h-full max-w-5xl">
					<div className="text-center">
						<h2 className="text-primary text-4xl font-bold mb-2">Green Trance</h2>
						<h1 className="text-4xl font-semibold text-white md:text-5xl">
							Calcula y gestiona tu huella de <span className="text-primary">Carbono</span>
						</h1>
						<p className="mt-4 text-white text-md md:text-lg">
							Descubre tu impacto en el planeta y aprende cómo reducirlo con nuestro asesoramiento experto. Únete a la
							comunidad que está tomando pasos significativos hacia la sostenibilidad.
						</p>
						<Button className="mt-8 bg-primary text-white py-3 px-6 text-lg font-medium hover:bg-green-600 transition duration-300 h-auto">
							Evalúa tu Huella Ecológica
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBannerSection;
