import { useState, useEffect } from "react";
import { getAvatars } from "@/services/userService";

const AvatarSelector: React.FC = () => {
	const [avatars, setAvatars] = useState<any[]>([]);
	const [selectedAvatar, setSelectedAvatar] = useState<any | null>(null);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(false);
	const [panelOpen, setPanelOpen] = useState<boolean>(true);
	const avatarsPerPage: number = 5;

	useEffect(() => {
		const fetchAvatars = async () => {
			setLoading(true);
			const avatarsData = await getAvatars();
			setAvatars(avatarsData);
			setLoading(false);
		};

		fetchAvatars();
	}, []);

	useEffect(() => {
		if (loading) return;

		if (currentPage * avatarsPerPage < avatars.length) {
			setLoading(true);
			// Simulate fetching more avatars
			setTimeout(() => {
				setCurrentPage((prevPage) => prevPage + 1);
				setLoading(false);
			}, 1000);
		}
	}, [avatars, currentPage, loading]);

	const handleAvatarClick = (avatar: any) => {
		setSelectedAvatar(avatar);
		setPanelOpen(false);
	};

	const indexOfLastAvatar = currentPage * avatarsPerPage;
	const currentAvatars = avatars.slice(0, indexOfLastAvatar);

	return (
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
	);
};

export default AvatarSelector;
