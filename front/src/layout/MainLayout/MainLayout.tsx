import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import SidePanel from "../../components/UserSettings/SidePanel";
import { useState } from "react";import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainLayout = () => {
	const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

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
			<ToastContainer />
		</div>
	);
};

export default MainLayout;
