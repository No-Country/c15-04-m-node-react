import { Icon } from "@iconify/react";
import GreentraceLogo from "../../assets/img/greentracelogo_desktop.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="py-10 w-full shadow-lg ">
			<div className="container mx-auto text-start d">
				<img src={GreentraceLogo} className="translate-x-[-5%]" alt="logo" width={"200px"} />
				<div className="font-semibold text-md">
					<p className="py-2">Sirviendo al mundo desde 2023</p>
					<p className="py-2">Argentina</p>
					<p className="py-2">hello@greentrace.com</p>
				</div>
			</div>
			<div className="container mx-auto text-center font-semibold ">
				<div className="py-6 text-sm">
					<p>&copy; 2023 Soluciones de tecnologias climaticas</p>
					<Link to={"/privacy"}>
						Política de privacidad
						<p>Terminos de uso</p>
					</Link>
				</div>
				<div className="flex container mx-auto justify-center">
					<a href="https://co.linkedin.com/" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="entypo-social:linkedin-with-circle" style={{ height: "30px", width: "30px" }} />
					</a>
					<a href="https://www.facebook.com/?locale=es_LA" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="formkit:facebook" style={{ height: "30px", width: "30px" }} />
					</a>
					<a href="https://twitter.com/?lang=es" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="formkit:twitter" style={{ height: "30px", width: "30px" }} />
					</a>
					<a href="https://www.instagram.com/" className="mr-4 rounded-full" target="_blank" rel="noopener noreferrer">
						<Icon icon="uil:instagram-alt" style={{ height: "34px", width: "34px" }} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
