import HeroSection from "@/components/Landing/HeroSection";
import NewsLetter from "@/components/Landing/NewsLetter";
import Presentation from "@/components/Landing/Presentation";
import Sustainableworld from "@/components/Landing/Sustainableworld";
import VideoCard from "@/components/Landing/VideoCard";

function Home(): JSX.Element {
	return (
		<div className="pt-20 container max-w-6xl">
			<HeroSection />
			<Presentation />
			<VideoCard />
			<Sustainableworld />
			<NewsLetter />
		</div>
	);
}

export default Home;
