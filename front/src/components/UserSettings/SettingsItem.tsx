import React from "react";
import { ChevronRight } from "lucide-react";
import { Switch } from "@/components/ui/switch";

type SettingsItemProps = {
	icon: React.ReactNode;
	label: string;
	onClick?: () => void;
	useSwitch?: boolean;
};

const SettingsItem: React.FC<SettingsItemProps> = ({ icon, label, onClick, useSwitch = false }) => {
	const IconComponent = useSwitch ? Switch : ChevronRight;

	return (
		<div className="flex px-6 py-3 justify-between font-bold">
			<div className="flex">
				{icon && <div className="mr-2">{icon}</div>}
				<h3>{label}</h3>
			</div>
			<button className="chevron-button" onClick={onClick}>
				<IconComponent />
			</button>
		</div>
	);
};

export default SettingsItem;
