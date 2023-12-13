import { Icon } from "@iconify/react";

import GreentraceLogo from "../../assets/img/greentracelogo_desktop.png";

const Footer = () => {
	return (
		<footer className=" py-4 w-full shadow-xl bg-footer bg-grey">
			<div className="container mx-auto text-start d">
<a href="/">
<img src={GreentraceLogo} alt="logo" width={"200px"} />
</a>
				
				<div className="font-semibold ">
					<p className="py-2">Sirviendo al mundo desde 2023</p>
					<p className="py-2">Argentina</p>
					<p className="py-2">hello@greentrace.com</p>
				</div>
			</div>
			<div className="container mx-auto text-center">
				<p className="pb-4 pt-4">&copy; 2023 Soluciones de tecnologias climaticas</p>
				<p className="pb-4">
					<a href="/">Privacy policy</a>.

				</p>
				<p className="pb-6">
					<a href="/">Terms of use</a>.
				</p>
				<div className="flex container mx-auto justify-center">
					<a href="https://co.linkedin.com/" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="entypo-social:linkedin-with-circle" style={{ height: "30px", width: "30px" }} />
					</a>
					<a href="https://www.facebook.com/?locale=es_LA" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="formkit:facebook" style={{ height: "30px", width: "30px" }} />
					</a>
					<a href="https://twitter.com/?lang=es" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="ri:twitter-x-fill" style={{ height: "30px", width: "30px" }} />
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
