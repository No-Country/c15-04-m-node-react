import React from "react";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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
		<div className="flex px-6 py-3 justify-between font-bold">
			<div className="flex">
				{icon && <div className="mr-2">{icon}</div>}
				<h3>{label}</h3>
			</div>
			<button className="chevron-button" onClick={onClick}>
				{useSwitch ? (
					<Switch checked={theme === "dark"} onCheckedChange={handleToggle} />
				) : (
					<ChevronRight onClick={onClick} />
				)}
			</button>
		</div>
	);
};

export default SettingsItem;
