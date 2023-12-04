import { ArrowLeft } from "lucide-react";
import { X } from "lucide-react";
type HeaderProps = {
	panelName: string;
	goback: boolean;
	onClose(): void; //prop for close callback
};

const HeaderPanel: React.FC<HeaderProps> = ({ panelName, goback, onClose }) => {
	return (
		<div className="w-full bg-white h-20 flex items-center justify-between shadow-md">
			<div className="">
				<a href="">{goback && <ArrowLeft className="w-6 h-6 ml-4" />}</a>
				<h1 className="text-xl font-bold px-4">{panelName}</h1>
			</div>
			<div>
				<a href="#" onClick={onClose}>
					{" "}
					{/* Add onClick event handler */}
					<X className="w-6 h-6 mr-4" />
				</a>
			</div>
		</div>
	);
};
export default HeaderPanel;
