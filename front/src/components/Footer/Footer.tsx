import { Icon } from "@iconify/react";
import GreentraceLogo from "../../assets/img/greentracelogo_desktop.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="py-10 w-full shadow-lg ">
			<div className="container mx-auto text-start">
				<img src={GreentraceLogo} className="translate-x-[-5%]" alt="logo" width={"200px"} />
				<div className="font-semibold text-md">
					<p className="py-2">Sirviendo al mundo desde 2023</p>
					<div className="flex gap-1">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
							<path fill="#75AADB" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z" />
							<path fill="#EEE" d="M0 13h36v10H0z" />
							<path
								fill="#FCBF49"
								d="m18 13l.488 2.548l1.426-2.167l-.525 2.54l2.146-1.457l-1.457 2.147l2.541-.524l-2.167 1.425L23 18l-2.548.488l2.167 1.426l-2.541-.525l1.457 2.146l-2.146-1.457l.525 2.541l-1.426-2.167L18 23l-.488-2.548l-1.425 2.167l.524-2.541l-2.147 1.457l1.457-2.146l-2.54.525l2.167-1.426L13 18l2.548-.488l-2.167-1.425l2.54.524l-1.457-2.147l2.147 1.457l-.524-2.54l1.425 2.167z"
							/>
							<path
								fill="#843511"
								d="m18 14.33l.242 1.265l.116.605l.339-.514l.708-1.076l-.261 1.261l-.125.604l.51-.346l1.066-.723l-.723 1.066l-.346.51l.603-.125l1.262-.26l-1.076.708l-.515.337l.605.116L21.67 18l-1.265.242l-.605.116l.514.339l1.076.708l-1.262-.261l-.604-.125l.346.51l.723 1.065l-1.065-.723l-.51-.346l.125.604l.261 1.262l-.708-1.076l-.338-.515l-.116.605L18 21.67l-.242-1.265l-.116-.605l-.339.515l-.708 1.076l.26-1.262l.125-.603l-.51.346l-1.066.723l.723-1.066l.346-.51l-.604.125l-1.261.261l1.076-.708l.514-.339l-.605-.116L14.33 18l1.265-.242l.605-.116l-.515-.339l-1.076-.708l1.261.26l.603.125l-.346-.51l-.724-1.066l1.066.724l.51.346l-.125-.603l-.26-1.261l.708 1.076l.339.515l.116-.605zM18 13l-.488 2.548l-1.425-2.167l.524 2.541l-2.147-1.457l1.457 2.147l-2.54-.524l2.167 1.425L13 18l2.548.488l-2.167 1.426l2.54-.525l-1.457 2.146l2.147-1.457l-.524 2.541l1.425-2.167L18 23l.488-2.548l1.426 2.167l-.525-2.541l2.146 1.457l-1.457-2.146l2.541.525l-2.167-1.426L23 18l-2.548-.488l2.167-1.425l-2.541.524l1.457-2.147l-2.146 1.457l.525-2.541l-1.426 2.167zm1.914.381h.005zm1.621 1.083h.005zm1.084 1.623h.005z"
							/>
							<circle cx="18" cy="18" r="2" fill="#FCBF49" />
							<path
								fill="#843511"
								d="M18 20.125c-1.172 0-2.125-.953-2.125-2.125s.953-2.125 2.125-2.125s2.125.953 2.125 2.125s-.953 2.125-2.125 2.125m0-4c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875s1.875-.841 1.875-1.875s-.841-1.875-1.875-1.875"
							/>
							<path
								fill="#C16540"
								d="M17.801 17.774c0 .155-.261.28-.583.28c-.323 0-.584-.125-.584-.28c0-.155.261-.28.584-.28c.322 0 .583.125.583.28m1.553-.024c0-.161-.266-.292-.594-.292c-.328 0-.594.13-.594.292s.266.292.594.292c.329 0 .594-.131.594-.292"
							/>
							<path
								fill="#ED8662"
								d="M17.463 18.874c0-.126.246-.229.548-.229c.303 0 .548.102.548.229c0 .126-.246.229-.548.229c-.303 0-.548-.103-.548-.229"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
							<path
								fill="#1F429B"
								d="M13 5H4a4 4 0 0 0-4 4v9h13zm-4.663 9.292l-1.882-1.367l-1.882 1.367l.719-2.212l-1.882-1.368h2.326L6.455 8.5l.719 2.212H9.5L7.618 12.08z"
							/>
							<path fill="#EEE" d="M32 5H13v13h23V9a4 4 0 0 0-4-4" />
							<path fill="#D42D27" d="M0 18v9a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-9z" />
							<path
								fill="#FFF"
								d="M7.174 10.712L6.455 8.5l-.719 2.212H3.41l1.882 1.368l-.719 2.212l1.882-1.367l1.882 1.367l-.719-2.212L9.5 10.712z"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
							<path fill="#FBD116" d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4" />
							<path fill="#22408C" d="M0 18h36v7H0z" />
							<path fill="#CE2028" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-2H0z" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 64 64">
							<path fill="#2b3990" d="M0 26h64v14H0z" />
							<path fill="#f9cb38" d="M54 11H10C3.373 11 0 15.925 0 22v4h64v-4c0-6.075-3.373-11-10-11" />
							<path fill="#ec1c24" d="M0 44c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11v-4H0z" />
							<path
								fill="#e6e7e8"
								d="m29.05 26.29l.665 1.346l1.485.218l-1.07 1.051l.251 1.483l-1.331-.7l-1.335.7l.255-1.483l-1.078-1.051l1.49-.218zm5.84 0l.666 1.346l1.494.218l-1.082 1.051l.252 1.483l-1.33-.7l-1.334.7l.255-1.483l-1.079-1.051l1.488-.218zm-11.947 1.081l.665 1.35l1.492.216l-1.08 1.053l.255 1.482l-1.332-.702l-1.333.702l.255-1.482l-1.079-1.053l1.488-.216zm18.247 0l.662 1.35l1.488.216l-1.08 1.053l.258 1.482l-1.328-.702l-1.337.702l.257-1.482l-1.08-1.053l1.488-.216zm5.396 3.108l.664 1.348l1.49.223l-1.075 1.05l.251 1.477l-1.33-.7l-1.336.7l.257-1.477l-1.077-1.05l1.487-.223zm-29.067-.017l.671 1.349l1.486.219l-1.078 1.05l.255 1.483l-1.334-.7l-1.333.7l.254-1.483l-1.078-1.05l1.49-.219zm-4.028 4.798l.666 1.344l1.49.219l-1.079 1.051l.256 1.486l-1.333-.704l-1.333.704l.254-1.486l-1.078-1.051l1.488-.219zm37.111 0l.668 1.346l1.488.217l-1.078 1.051l.254 1.486l-1.332-.704l-1.332.704l.25-1.486l-1.08-1.051l1.495-.217z"
							/>
						</svg>
					</div>
					<p className="py-2">hello@greentrace.com</p>
				</div>
			</div>
			<div className="container mx-auto text-center font-semibold ">
				<div className="py-6 text-sm">
					<p>&copy; 2023 Soluciones de tecnologias climaticas</p>
					<Link to={"/privacy"}>Política de privacidad y Terminos de uso</Link>
				</div>
				<div className="flex container mx-auto justify-center items-center">
					<a href="https://co.linkedin.com/" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="entypo-social:linkedin-with-circle" style={{ height: "32px", width: "32px" }} />
					</a>
					<a href="https://www.facebook.com/?locale=es_LA" className="mr-4" target="_blank" rel="noopener noreferrer">
						<Icon icon="formkit:facebook" style={{ height: "34px", width: "34px" }} />
					</a>
					<a href="https://x.com/?lang=es" className="mr-4 dark:invert" target="_blank" rel="noopener noreferrer">
						<img src="src/assets/img/socials/xcom.svg" width={"50px"} alt="x-com" />
					</a>
					<a href="https://www.instagram.com/" className="mr-4 dark:invert" target="_blank" rel="noopener noreferrer">
						<img src="src/assets/img/socials/ig.svg" width={"32px"} alt="x-com" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
