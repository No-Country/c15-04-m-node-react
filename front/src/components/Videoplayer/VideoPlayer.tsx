import React from "react";

interface Props {
	embedId: string;
	width?: number;
	height?: number;
}

const VideoPlayer: React.FC<Props> = ({ embedId, width, height }) => {
	const aspectRatio = width && height ? (height / width) * 100 : 56.25;

	return (
		<div className="video-responsive">
			<iframe
				src={`https://www.youtube.com/embed/${embedId}`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</div>
	);
};

export default VideoPlayer;
