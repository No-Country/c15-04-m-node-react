import GooglePlay from '../../../assets/img/hero/googleplay.svg';
import AppStore from '../../../assets/img/hero/appstore.svg';
import HeroImage from '../../../assets/img/hero/iphone12.png';


const HeroSection = () => {
	return (
		<div className="text-left p-6 md:flex md:items-center md:w-3/4">
			<div>
				<h1 className="text-3xl font-bold">
					Calcula y gestiona tu huella de <span className="text-emerald-500">carbono</span>
				</h1>
				<p className="text-md pt-6 mr-10 font-semibold">
					Desarrolla la habilidad de conocer tu huella de carbono y sigue nuestros consejos para reducirla. ¡Juntos
					podemos hacer un mundo mejor!
				</p>
				<div className="store-icons flex gap-5 mt-6">
					<a href="">
						<div className="bg-white rounded-sm">
							<img className="object-contain" src={AppStore} alt="App Store" />
						</div>
					</a>
					<a href="">
						<div className="bg-white rounded-sm">
							<img className="object-contain" src={GooglePlay} alt="Google Play Store" />
						</div>
					</a>
				</div>
			</div>
			<img className="mt-6" src={HeroImage} alt="CellPhone" />
		</div>
	);
};

export default HeroSection;
