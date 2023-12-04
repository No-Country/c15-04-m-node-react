import React from "react";
import { ModeToggle } from "../mode-toggle";
import Avatar from "../ui/avatar";

function Navbar() {
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

							{/* <ModeToggle /> */}
							<a href="">
								<Avatar useravatar="https://placehold.co/100x100" imagesize={40} />
							</a>
						</div>
					</div>
					<div className=" flex md:hidden">
						<button onClick={toggleNavbar} type="button" className="" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-10 w-10"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							) : (
								<svg
									className="block h-10 w-10"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							)}
						</button>
					</div>
				</div>
				{isOpen && (
					<div className="md:hidden absolute bg-white dark:bg-[#020817]  w-full left-0" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 dark:text-white">
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
						<ModeToggle />
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
