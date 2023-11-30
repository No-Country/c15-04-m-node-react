import { Separator } from "@radix-ui/react-select";

const Footer = () => {
	return (
		<footer className=" py-4 w-full shadow-xl">
			<div className="container mx-auto text-start d">
				<img src="./src/assets/img/greentracelogo_desktop.png" alt="logo" width={"200px"} />
				<div className="font-semibold ">
					<p className="py-2">Sirviendo al mundo desde 2023</p>
					<p className="py-2">Argentina</p>
					<p className="py-2">hello@greentrace.com</p>
				</div>
			</div>
			<div className="container mx-auto text-center md:flex md:gap-4 md:justify-between">
				<p className="py-5">&copy; 2023 Soluciones de tecnologías climáticas</p>
				<p className="py-5">Política de privacidad</p>
				<p className="py-5">Términos de uso</p>
				<div className="flex justify-center gap-4 py-20 md:py-0 md:px-10 m">
					<a href="#">
						<img src="./src/assets/img/socials/linkedin.svg" alt="linkedin" width={"40x"} />
					</a>
					<a href="#">
						<img src="./src/assets/img/socials/facebook.svg" alt="facebook" width={"40x"} />
					</a>
					<a href="#">
						<img src="./src/assets/img/socials/twitter.svg" alt="twitter" width={"40px"} />
					</a>
					<a href="#">
						<img src="./src/assets/img/socials/instagram.svg" alt="instagram" width={"40px"} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
