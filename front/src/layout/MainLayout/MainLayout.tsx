import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/UserSettings/SidePanel";
import { useState } from "react";
const MainLayout = () => {
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(true);

	const toggleSidePanel = () => {
		setIsSidePanelOpen(!isSidePanelOpen);
	};

	return (
		<div>
			<Navbar onToggleSidePanel={toggleSidePanel} />
			<SidePanel
				{...{
					isOpen: isSidePanelOpen,
					onClose: () => {
						setIsSidePanelOpen(false);
					},
				}}
			/>
			<Outlet />
		</div>
	);
};

export default MainLayout;
