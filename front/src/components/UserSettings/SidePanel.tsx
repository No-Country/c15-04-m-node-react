import SettingsCard from "./SettingsCard";

import { Button } from "@/components/ui/button";
import React from "react";
import { User, Mail, Lock, Bell, Palette, XCircle, ShieldAlert, LogOut } from "lucide-react";
import Avatar from "../ui/avatar";
import HeaderPanel from "./HeaderPanel";

type SidePanelProps = {
	isOpen: boolean;
	onClose: () => void;
};

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
	const configItems = [
		{
			icon: <User size={20} />,
			label: "Cambiar Nombre",
			useSwitch: false,
		},
		{
			icon: <Mail size={20} />,
			label: "Cambiar E-mail",
			useSwitch: false,
		},
		{
			icon: <Lock size={20} />,
			label: "Cambiar Contraseña",
			useSwitch: false,
		},
	];
	const personalizationItems = [
		{
			icon: <Bell size={20} />,
			label: "Notifiaciones",
			useSwitch: true,
		},
		{
			icon: <Palette size={20} />,
			label: "Tema",
			useSwitch: true,
		},
	];
	const support = [
		{
			icon: <XCircle size={20} />,
			label: "Reportar Abuso",
			useSwitch: false,
		},
		{
			icon: <ShieldAlert size={20} />,
			label: "FAQ",
			useSwitch: false,
		},
	];
	let username = "John Doe";
	return (
		<div
			className={`fixed inset-y-0 right-0 w-full md:w-1/4 dark:bg-[#020817] bg-white shadow-lg ${
				isOpen ? "translate-x" : "translate-x-full  "
			} transition-transform duration-300 ease-in-out`}
		>
			<HeaderPanel panelName="Perfil" goback={false} />
			<div className="flex items-center justify-center pt-4 ">
				<Avatar useravatar={"https://github.com/shadcn.png"} imagesize={100} />
			</div>
			<div className="flex flex-col items-center justify-center p-2 font-semibold">
				<h3 className="text-bold text-xl">{username}</h3>
			</div>
			<div>
				<SettingsCard title="Configuración" icon={<User size={20} />} items={configItems} />
				<SettingsCard title="Personalización" icon={<User size={20} />} items={personalizationItems} />
				<SettingsCard title="Soporte" icon={<User size={20} />} items={support} />
			</div>
			<div className="flex items-center justify-center pt-4">
				<Button className="bg-emerald-500" type="submit">
					<LogOut className="mr-2" />
					Cerrar Sesión
				</Button>
			</div>
		</div>
	);
};

export default SidePanel;
