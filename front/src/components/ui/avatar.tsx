import { useUserContext } from "@/hooks/useExample/useUserContext";

type AvatarProps = {
	imagesize: number;
};

const Avatar: React.FC<AvatarProps> = ({ imagesize }) => {
	const { user } = useUserContext();
	return (
		<img
			className="object-contain rounded-full aspect-ratio-square"
			src={user?.img || "https://img.freepik.com/premium-vector/flat-instagram-icons-notifications_619991-50.jpg"}
			alt="Avatar"
			width={imagesize}
			height={imagesize}
		/>
	);
};

export default Avatar;
