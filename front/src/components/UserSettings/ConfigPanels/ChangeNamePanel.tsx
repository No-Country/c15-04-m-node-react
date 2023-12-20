import React from "react";
import { X } from "lucide-react";
import Avatar from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/hooks/useUserContext";

interface ChangeNamePanelProps {
	isOpen: boolean;
	onClose: () => void;
}

const ChangeNamePanel: React.FC<ChangeNamePanelProps> = ({ isOpen, onClose }) => {
	const [name, setName] = React.useState("");
	const { user, updateUser } = useUserContext();
	isOpen = true;

	const handleSubmit = () => {
		updateUser({ nombre: name });
	};

	React.useEffect(() => {
		if (user?.nombre) {
			setName(user.nombre);
		}
	}, [user]);

	return (
		<div
			className={`fixed inset-y-0 right-0 w-full  lg:w-1/4 md:w-1/3  dark:bg-[#020817] bg-white shadow-lg flex flex-col ${
				isOpen ? "translate-x" : "translate-x-full  "
			} transition-transform duration-300 ease-in-out`}
		>
			<div className="header py-11 sticky z-10 w-full h-20 flex items-center justify-between shadow-md">
				<div className="">
					<h1 className="text-xl font-bold px-4">Cambiar Nombre</h1>
				</div>
				<div>
					<a onClick={onClose} className="cursor-pointer">
						<X size={34} className="m-4" />
					</a>
				</div>
			</div>
			<div className="content py-4  grow overflow-auto">
				<div className="flex items-center justify-center pt-4 ">
					<Avatar imagesize={100} />
				</div>
				<div className="flex flex-col items-center justify-center p-2 font-semibold">
					<h3 className="text-bold text-xl">{user?.nombre}</h3>
				</div>
				<div className="flex flex-col items-center justify-center gap-6 pt-6 px-6">
					<Input
						type="text"
						placeholder="Nombre Nuevo de usuario"
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</div>
				<div className="flex items-center justify-center pt-10">
					<Button className="bg-emerald-500" type="submit" onClick={handleSubmit}>
						Actualizar Nombre
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ChangeNamePanel;
