import { LoginDialog } from "../LoginDialog";
import Avatar from "../ui/avatar";
import { Menu } from "lucide-react";
import { useUserContext } from "@/hooks/useUserContext";

import GreenTraceLogo from "../../assets/img/greentracelogo.png";
import GreenTraceLogoDesktop from "../../assets/img/greentracelogo_desktop.png";
import { Link } from "react-router-dom";

type NavbarProps = {
	onToggleSidePanel: () => void;
};

function Navbar({ onToggleSidePanel }: NavbarProps) {
	const { user, loading } = useUserContext();

	return (
		<nav className="bg-white fixed top-0 py-1 z-20 w-full drop-shadow dark:bg-[#020817] shadow-xl">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link to="/">
								<img className="block md:hidden" src={GreenTraceLogo} width={"80px"} alt="" />
								<img className="hidden md:block" src={GreenTraceLogoDesktop} width={"200px"} alt="" />
							</Link>
						</div>
					</div>
					<div className="hidden md:flex justify-center items-center">
						<div className="space-x-4 text-lg">{user?.nombre === undefined && <LoginDialog />}</div>
						<button disabled={loading} className="px-4 cursor-pointer" onClick={onToggleSidePanel}>
							{user?.nombre !== undefined && <Avatar imagesize={32} />}
						</button>
					</div>
					<div className="flex md:hidden">
						{user?.nombre !== undefined ? (
							<button
								onClick={onToggleSidePanel}
								type="button"
								className=""
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<Menu size={34} />
							</button>
						) : (
							<div className="inline-flex items-center">
								<LoginDialog />
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
