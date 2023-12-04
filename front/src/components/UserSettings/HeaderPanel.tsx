import { ArrowLeft } from "lucide-react";

type HeaderProps = {
	panelName: string;
};

const HeaderPanel: React.FC<HeaderProps> = ({ panelName }) => {
	return (
		<div className="w-full bg-white h-20 flex items-center justify-start shadow-md">
			<ArrowLeft className="w-14" />
			<h1 className="text-xl font-bold ">{panelName}</h1>
		</div>
	);
};

export default HeaderPanel;
