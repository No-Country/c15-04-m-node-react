import { useState, useEffect } from "react";
import { useUserContext } from "@/hooks/useUserContext";
import { Avatar } from "@/types/api";
import { X } from "lucide-react";

const AvatarSelector: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const avatarsPerPage: number = 5;

	const { avatars, panelOpen, setPanelOpen, updateUser } = useUserContext();

	useEffect(() => {
		if (loading) return;

		if (currentPage * avatarsPerPage < avatars.length) {
			setLoading(true);
			setTimeout(() => {
				setCurrentPage((prevPage) => prevPage + 1);
				setLoading(false);
			}, 1000);
		}
	}, [avatars, currentPage, loading]);

	const handleAvatarClick = async (avatar: Avatar) => {
		await updateUser({
			img: avatar.url,
		});
		setPanelOpen(false);
	};

	const indexOfLastAvatar = currentPage * avatarsPerPage;
	const currentAvatars = avatars.slice(0, indexOfLastAvatar);

	return (
		panelOpen && (
			<div className="fixed top-0 z-50 left-0 right-0 bottom-0 flex items-center w-full h-full overflow-hidden justify-center bg-black bg-opacity-50">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col pt-2 justify-center">
					<div className="flex justify-between items-center px-4">
						<h2 className="text-black font-bold text-lg flex">Selecciona tu Avatar:</h2>
						<button className="cursor-pointer">
							<X size={24} onClick={() => setPanelOpen(false)} className="m-4 text-black" />
						</button>
					</div>

					<div className="max-h-96 overflow-auto">
						<div className="grid grid-cols-3 gap-4 p-4">
							{currentAvatars.map((avatar) => (
								<img
									src={avatar.url}
									alt="avatar"
									key={avatar.id}
									className="cursor-pointer hover:opacity-75 object-cover object-center rounded-full"
									style={{ width: "100px", height: "100px" }}
									onClick={() => handleAvatarClick(avatar)}
									loading="lazy"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		)
	);
};

export default AvatarSelector;
