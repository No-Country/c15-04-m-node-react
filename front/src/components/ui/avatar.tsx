import { useUserContext } from "@/hooks/useExample/useUserContext";

type AvatarProps = {
	imagesize: number;
};

const Avatar: React.FC<AvatarProps> = ({ imagesize }) => {
	const { user } = useUserContext();
	return (
		<img
			className="object-cover object-center rounded-full"
			src={user?.img || "https://img.freepik.com/premium-vector/flat-instagram-icons-notifications_619991-50.jpg"}
			alt="Avatar"
			width={imagesize}
			height={imagesize}
			style={{
				width: `${imagesize}px`,
				height: `${imagesize}px`,
			}}
		/>
	);
};

export default Avatar;
