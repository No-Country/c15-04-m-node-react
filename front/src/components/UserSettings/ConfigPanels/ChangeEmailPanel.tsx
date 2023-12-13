import React from "react";
import { X } from "lucide-react";
import Avatar from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChangeEmailPanelProps {
	isOpen: boolean;
	onClose: () => void;
}

const ChangeEmailPanel: React.FC<ChangeEmailPanelProps> = ({ isOpen, onClose }) => {
	isOpen = true;
	return (
		<div
			className={`fixed inset-y-0 right-0 w-full md:w-1/4 dark:bg-[#020817] bg-white shadow-lg ${
				isOpen ? "translate-x" : "translate-x-full  "
			} transition-transform duration-300 ease-in-out`}
		>
			<div className="header w-full h-20 flex items-center justify-between shadow-md  ">
				<div className="">
					<h1 className="text-xl font-bold px-4">Cambiar E-Mail</h1>
				</div>
				<div>
					<a onClick={onClose} className="cursor-pointer">
						<X size={34} className="m-4" />
					</a>
				</div>
			</div>
			<div className="content">
				<div className="flex items-center justify-center pt-4 ">
					<Avatar imagesize={100} />
				</div>
				<div className="flex flex-col items-center justify-center p-2 font-semibold">
					<h3 className="text-bold text-xl">John Doe</h3>
				</div>
				<div className="flex flex-col items-center justify-center gap-6 pt-6 px-6">
					<Input type="text" placeholder="E-mail actual" />
					<Input type="text" placeholder="E-mail nuevo" />
					<Input type="text" placeholder="Confirmar e-mail nuevo" />
				</div>
				<div className="flex items-center justify-center pt-10">
					<Button className="bg-emerald-500" type="submit">
						Actualizar Nombre
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ChangeEmailPanel;
