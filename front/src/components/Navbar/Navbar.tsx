import React from "react";

function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className="bg-white drop-shadow">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center ">
						<div className="flex-shrink-0">
							<img src="src/assets/img/greentracelogo.png" width={"70px"} alt="" />
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a href="/" className="text-black">
									Home
								</a>
								<a href="/" className="text-black">
									About
								</a>
								<a href="/" className="text-black">
									Contact
								</a>
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button onClick={toggleNavbar} type="button" className="" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
								<svg
									className="block h-10 w-8 pt-1"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							) : (
								<svg
									className="block h-10 w-8 pt-1 "
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
					<div className="md:hidden absolute bg-white w-full left-0" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium">
								Home
							</a>
							<a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium">
								About
							</a>
							<a href="/" className="text-black block px-3 py-2 rounded-md text-base font-medium">
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
