import React, { useState } from "react";
import SettingsCard from "./SettingsCard";
import { Button } from "@/components/ui/button";
import { User, Palette, ShieldAlert, LogOut } from "lucide-react";
import Avatar from "../ui/avatar";
import HeaderPanel from "./HeaderPanel";
import { useTheme } from "@/components/theme-provider";
import { useUserContext } from "@/hooks/useUserContext";
import ChangeNamePanel from "./ConfigPanels/ChangeNamePanel";
import ChangeEmailPanel from "./ConfigPanels/ChangeEmailPanel";
import ChangePasswordPanel from "./ConfigPanels/ChangePaswordPanel";
import { LinkOption, links } from "@/constants/links";
import { useNavigate } from "react-router-dom";
import { DialogPortal, Dialog, DialogContent, DialogClose } from "../ui/dialog";

type SidePanelProps = {
	isOpen: boolean;
	onClose: () => void;
};

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
	const [showChangeName, setShowChangeName] = useState(false);
	const [showChangePassword, setShowChangePassword] = useState(false);
	const [showChangeEmail, setShowChangeEmail] = useState(false);
	const { user, setPanelOpen, getAvatars, getCarbonData } = useUserContext();
	const { theme, setTheme } = useTheme();
	const handleLogout = () => {
		localStorage.clear();
		window.location.reload();
	};
	const [modalOpen, setModalOpen] = useState(false);

	const navigate = useNavigate();
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
	const handleClick = async (option: LinkOption) => {
		let success = true;
		switch (option.case) {
			case "footprint":
				success = await getCarbonData();
				break;
		}

		if (success) {
			navigate(option.path);
			onClose();
		}
	};

	const support = [
		{
			icon: <ShieldAlert size={20} />,
			label: "FAQ",
			useSwitch: false,
			onClick: () => navigate("/faq"),
		},
	];
	const username = user?.nombre ?? "John Doe";

	return (
		<div
			className={`fixed inset-y-0 z-40 right-0 w-full lg:w-1/4 md:w-1/3 dark:bg-[#020817] bg-white shadow-lg flex flex-col border-l-2 ${
				isOpen ? "translate-x" : "translate-x-full "
			} transition-transform duration-300 ease-in-out`}
		>
			{showChangeName && <ChangeNamePanel isOpen={showChangeName} onClose={() => setShowChangeName(false)} />}
			{showChangePassword && (
				<ChangePasswordPanel isOpen={showChangePassword} onClose={() => setShowChangePassword(false)} />
			)}
			{showChangeEmail && <ChangeEmailPanel isOpen={showChangeEmail} onClose={() => setShowChangeEmail(false)} />}

			<HeaderPanel onClose={onClose} panelName="Perfil" goback={false} />
			<div className="overflow-auto grow py-4">
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
					<div>
						<SettingsCard
							title="Links"
							items={links.map((e) => {
								return {
									...e,
									onClick: () => handleClick(e),
								};
							})}
						/>
					</div>

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
			<Dialog open={modalOpen} onOpenChange={setModalOpen}>
				<DialogPortal>
					<DialogContent>
						<h1>
							Deseas calcular tu huella de carbono? <br />
						</h1>
						<div className="flex gap-2 mx-auto">
							<DialogClose
								onClick={() => {
									navigate("/quiz");
								}}
							>
								<Button variant="default">Si</Button>
							</DialogClose>
							<DialogClose>
								<Button variant="destructive">No</Button>
							</DialogClose>
						</div>
					</DialogContent>
				</DialogPortal>
			</Dialog>
		</div>
	);
};

export default SidePanel;
