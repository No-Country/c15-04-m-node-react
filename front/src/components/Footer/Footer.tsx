import { Link } from "react-router-dom";
import { icons, items } from "./items";

const Footer = () => {
	return (
		<footer className="py-10">
			<div className="container flex flex-col max-lg:text-center">
				<div className="flex flex-col items-center">
					<h1 className="font-bold text-5xl">Green trace</h1>
					<p className="font-semibold text-md py-2">Sirviendo al mundo desde 2023</p>
					<div className="flex gap-1">
						{items.map((item, index) => (
							<img
								key={index}
								className="rounded-sm"
								title={item.name}
								src={item.img}
								alt={item.name}
								width="36"
								height="26"
							/>
						))}
					</div>
					<p className="font-semibold text-md py-2">hello@greentrace.com</p>
				</div>
				<hr className="my-4" />
				<div className="flex justify-between flex-col lg:flex-row gap-4 my-4 items-center">
					<div className="max-lg:order-2">
						<p className="text-sm">&copy; 2023 Soluciones de tecnologias climaticas</p>
						<Link to={"/privacy"}>Política de privacidad y Terminos de uso</Link>
					</div>
					<div className="flex gap-2">
						{icons.map((icon, index) => (
							<a
								className="bg-black text-white p-2 rounded-full hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-400 dark:hover:text-black transition duration-300"
								key={index}
								href={`https://${icon.name}.com/`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<icon.icon size={24} />
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
