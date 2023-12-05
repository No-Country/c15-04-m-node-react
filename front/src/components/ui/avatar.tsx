type AvatarProps = {
	useravatar: string;
	imagesize: number;
};

const Avatar: React.FC<AvatarProps> = ({ useravatar, imagesize }) => {
	return (
		<img
			className="rounded-full"
			src={useravatar}
			alt="Avatar"
			width={imagesize}
			height={imagesize}
			style={{ objectFit: "cover" }}
		/>
	);
};

export default Avatar;
