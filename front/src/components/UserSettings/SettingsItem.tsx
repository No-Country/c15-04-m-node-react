import React from "react";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";

type SettingsItemProps = {
	icon: React.ReactNode;
	label: string;
	onClick?: () => void;
	useSwitch?: boolean;
	handleToggle?: () => void;
	theme: string;
};

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, label, onClick, useSwitch, theme, handleToggle }) => {
	return (
		<Button
			className="bg-transparent w-full flex px-6 py-3 justify-between font-bold hover:bg-slate-100 dark:text-primary dark:hover:bg-slate-800 rounded-none"
			onClick={onClick || handleToggle}
		>
			<div className="flex">
				{icon && <div className="mr-2">{icon}</div>}
				<h3>{label}</h3>
			</div>
			{useSwitch ? <Switch checked={theme === "dark"} /> : <ChevronRight />}
		</Button>
	);
};

export default SettingsItem;
