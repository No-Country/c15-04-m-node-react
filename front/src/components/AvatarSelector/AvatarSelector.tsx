import { useState, useEffect } from "react";
import { useUserContext } from "@/hooks/useExample/useUserContext";
import { Avatar } from "@/types/api";

const AvatarSelector: React.FC = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [panelOpen, setPanelOpen] = useState<boolean>(false);
	const avatarsPerPage: number = 5;

	const { getAvatars, avatars, updateUser } = useUserContext();

	useEffect(() => {
		if (avatars.length === 0) {
			getAvatars();
		}
	}, []);

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
			<div className="fixed top-0 left-0 right-0 bottom-0 flex items-center w-full h-full overflow-hidden justify-center bg-black bg-opacity-50">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center">
					<h2 className="text-black font-bold text-lg flex justify-center">Selecciona tu Avatar</h2>
					<div className="max-h-60 overflow-auto">
						<div className="grid grid-cols-3 gap-4 p-4">
							{currentAvatars.map((avatar: any, index: number) => (
								<img
									src={avatar.url}
									alt={avatar.name}
									key={avatar.id}
									className="cursor-pointer hover:opacity-75 object-cover object-center rounded-full"
									style={{ width: "100px", height: "100px" }}
									onClick={() => handleAvatarClick(avatar)}
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
