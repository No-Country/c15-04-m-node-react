import HeroSection from "../ui/Landing/HeroSection";

import VideoCard from "../ui/Landing/VideoCard";
import Sustainableworld from "../ui/Landing/Sustainableworld";
import Presentation from "../ui/Landing/Presentation";
import NewsLetter from "../ui/Landing/NewsLetter";

const Landing = () => {
	return (
		<div className="landing-container pt-20">
			<div className="flex flex-col gap-10 items-center ">
				<HeroSection />
				<Presentation />
				<VideoCard />
				<div className="hero flex flex-col items-center justify-center">
					<Sustainableworld />
					<NewsLetter />
				</div>
			</div>
		</div>
	);
};

export default Landing;
