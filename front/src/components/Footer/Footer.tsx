import { Icon } from "@iconify/react";
const Footer = () => {
	return (
		<footer className=" text-black py-4 w-full fixed bottom-8">
			<div className="container mx-auto flex-shrink-0 pb-4">
				<img src="src/assets/img/greentracelogo_desktop.png" width={"200px"} alt="" />
				<p className="py-2">Sirviendo al mundo desde el 2023</p>
				<p className="py-2">Argentina</p>
				<p className="pt-2 pb-4">hello@greetrace.com</p>
			</div>
			<div className="container mx-auto text-center">
				<p className="pt-2 pb-4 border-t-2 border-slate-200"></p>
				<p className="pb-4 pt-4">&copy; 2023 Soluciones de tecnologias climaticas</p>
				<p className="pb-4">Privacy policy</p>
				<p className="pb-6">Terms of use</p>
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
					<a href="https://www.instagram.com/" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="uil:instagram-alt" style={{ height: "30px", width: "30px" }} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
