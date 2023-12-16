import HeroImage from "../../assets/img/hero/iphone12.png";

const HeroSection = () => {
	return (
		<div className="flex flex-wrap items-center justify-center max-lg:text-center mt-4">
			<div className="lg:w-1/2 md:pr-8">
				<h1 className="text-3xl font-bold">
					Calcula y gestiona tu huella de <span className="text-emerald-500">carbono</span>
				</h1>
				<p className="text-md pt-6 mr-10 font-semibold">
					Desarrolla la habilidad de conocer tu huella de carbono y sigue nuestros consejos para reducirla. ¡Juntos
					podemos crear un mundo mejor!
				</p>
			</div>
			<div className="lg:w-1/2">
				<img className="mt-6" src={HeroImage} alt="CellPhone" />
			</div>
		</div>
	);
};

export default HeroSection;
