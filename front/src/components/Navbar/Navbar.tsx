import React from "react";
import { LoginDialog } from "../LoginDialog";
import Avatar from "../ui/avatar";
import { Menu, X } from "lucide-react";

type NavbarProps = {
	onToggleSidePanel: () => void;
};

function Navbar({ onToggleSidePanel }: NavbarProps) {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white drop-shadow dark:bg-[#020817]">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<img className="block md:hidden" src="src/assets/img/greentracelogo.png" width={"80px"} alt="" />
							<img className="hidden md:block" src="src/assets/img/greentracelogo_desktop.png" width={"200px"} alt="" />
						</div>
					</div>
					<div className=" hidden md:flex justify-center items-center">
						<div className="space-x-4 text-lg">
							<a href="/" className="dark:text-white px-3 py-2 rounded-md text-base font-medium hover:underline">
								Home
							</a>
							<a href="/" className="dark:text-white px-3 py-2 rounded-md text-base font-medium hover:underline">
								About
							</a>
							<a href="/" className="dark:text-white px-3 py-2 rounded-md text-base font-medium hover:underline">
								Contact
							</a>
							<LoginDialog />
						</div>
						<a className="px-4 cursor-pointer" onClick={onToggleSidePanel}>
							<Avatar useravatar={"https://github.com/shadcn.png"} imagesize={40} />
						</a>
					</div>
					<div className=" flex md:hidden">
						<button onClick={toggleNavbar} type="button" className="" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							{!isOpen ? <Menu size={34} /> : <X size={34} />}
						</button>
					</div>
				</div>
				{isOpen && (
					<div className="md:hidden absolute bg-white dark:bg-[#020817]  w-full left-0 py-4" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:text-white">
							<a
								className="text-black dark:text-white  px-3  rounded-md text-xl  font-medium flex justify-between "
								onClick={onToggleSidePanel}
							>
								Perfil <Avatar useravatar="https://placehold.co/100x100" imagesize={40} />
							</a>
							<a href="/" className="text-black dark:text-white block px-3 py-3 rounded-md text-xl font-medium">
								Home
							</a>
							<a href="/" className="text-black dark:text-white block px-3 py-3 rounded-md text-xl font-medium">
								About
							</a>
							<a href="/" className="text-black dark:text-white  block px-3 py-3 rounded-md text-xl  font-medium">
								Contact
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
