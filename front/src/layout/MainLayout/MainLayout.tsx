import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/UserSettings/SidePanel";
import { useState } from "react";
import AvatarSelector from "@/components/AvatarSelector/AvatarSelector";
import Footer from "@/components/Footer/Footer";
const MainLayout = () => {
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

	const toggleSidePanel = () => {
		setIsSidePanelOpen(!isSidePanelOpen);
	};

	return (
		<div>
			<Navbar onToggleSidePanel={toggleSidePanel} />
			<AvatarSelector />

			<SidePanel
				{...{
					isOpen: isSidePanelOpen,
					onClose: () => {
						setIsSidePanelOpen(false);
					},
				}}
			/>
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
