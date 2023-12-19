import FeaturedServicesSection from "@/components/Landing/FeaturedServicesSection";
import HeroBannerSection from "@/components/Landing/HeroBannerSection";
import NewsLetter from "@/components/Landing/NewsLetter";
import Presentation from "@/components/Landing/Presentation";
import Sustainableworld from "@/components/Landing/Sustainableworld";
import VideoCard from "@/components/Landing/VideoCard";

function Home(): JSX.Element {
	return (
		<main className="mt-20">
			<HeroBannerSection />
			<div className="pt-20 container max-w-6xl">
				<FeaturedServicesSection />
				<Presentation />
				<VideoCard />
				<Sustainableworld />
				<NewsLetter />
			</div>
		</main>
	);
}

export default Home;
