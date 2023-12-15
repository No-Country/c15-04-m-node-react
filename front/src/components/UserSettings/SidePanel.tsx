import React, { useState } from "react";
import SettingsCard from "./SettingsCard";
import { Button } from "@/components/ui/button";
import { User, Palette, ShieldAlert, LogOut } from "lucide-react";
import Avatar from "../ui/avatar";
import HeaderPanel from "./HeaderPanel";
import { useTheme } from "@/components/theme-provider";
import { useUserContext } from "@/hooks/useExample/useUserContext";
import ChangeNamePanel from "./ConfigPanels/ChangeNamePanel";
import ChangeEmailPanel from "./ConfigPanels/ChangeEmailPanel";
import ChangePasswordPanel from "./ConfigPanels/ChangePaswordPanel";
type SidePanelProps = {
	isOpen: boolean;
	onClose: () => void;
};

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
	const [showChangeName, setShowChangeName] = useState(false);
	const [showChangePassword, setShowChangePassword] = useState(false);
	const [showChangeEmail, setShowChangeEmail] = useState(false);
	const { user, setPanelOpen, getAvatars } = useUserContext();
	const { theme, setTheme } = useTheme();
	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	};

	const closeAllPanels = () => {
		setShowChangeName(false);
		setShowChangePassword(false);
		setShowChangeEmail(false);
	};

	const configItems = [
		{
			label: "Cambiar Nombre",
			onClick: () => {
				closeAllPanels();
				setShowChangeName(true);
			},
		},
		{
			label: "Cambiar Contraseña",
			onClick: () => {
				closeAllPanels();
				setShowChangePassword(true);
			},
		},
	];
	const personalizationItems = [
		{
			icon: <Palette size={20} />,
			label: "Tema",
			useSwitch: true,
			handleToggle: () => {
				const newTheme = theme === "dark" ? "light" : "dark";
				setTheme(newTheme);
			},
			theme: theme,
		},
	];
	const handleClick = () => {
		window.location.href = "/faq";
	};
	const support = [
		{
			icon: <ShieldAlert size={20} />,
			label: "FAQ",
			useSwitch: false,
			onClick: handleClick,
		},
	];
	const username = user?.nombre ?? "John Doe";
	return (
		<div
			className={`fixed inset-y-0 z-40 right-0 w-full md:w-1/4 dark:bg-[#020817] bg-white shadow-lg ${
				isOpen ? "translate-x" : "translate-x-full  "
			} transition-transform duration-300 ease-in-out`}
		>
			{showChangeName && <ChangeNamePanel isOpen={showChangeName} onClose={() => setShowChangeName(false)} />}
			{showChangePassword && (
				<ChangePasswordPanel isOpen={showChangePassword} onClose={() => setShowChangePassword(false)} />
			)}
			{showChangeEmail && <ChangeEmailPanel isOpen={showChangeEmail} onClose={() => setShowChangeEmail(false)} />}

			<HeaderPanel onClose={onClose} panelName="Perfil" goback={false} />
			<div className="flex items-center justify-center pt-4 ">
				<button
					onClick={() => {
						setPanelOpen(true);
						getAvatars();
					}}
				>
					<Avatar imagesize={100} />
				</button>
			</div>
			<div className="flex flex-col items-center justify-center p-2 font-semibold">
				<h3 className="text-bold text-xl">{username}</h3>
			</div>
			<div>
				<SettingsCard title="Configuración" icon={<User size={20} />} items={configItems} />
				<SettingsCard
					title="Personalización"
					icon={<User size={20} />}
					items={personalizationItems}
					theme={theme}
					handleToggle={setTheme}
				/>
				<SettingsCard title="Soporte" icon={<User size={20} />} items={support} />
			</div>
			<div className="flex items-center justify-center pt-4">
				<Button className="bg-emerald-500" type="submit" onClick={handleLogout}>
					<LogOut className="mr-2" />
					Cerrar Sesión
				</Button>
			</div>
		</div>
	);
};

export default SidePanel;
