import FeaturedServicesSection from "@/components/Landing/FeaturedServicesSection";
import HeroBannerSection from "@/components/Landing/HeroBannerSection";
import Presentation from "@/components/Landing/Presentation";
import Sustainableworld from "@/components/Landing/Sustainableworld";
import TeamSection from "@/components/Landing/TeamSection";
import VideoCard from "@/components/Landing/VideoCard";

function Home(): JSX.Element {
	return (
		<main className="pt-20">
			<HeroBannerSection />
			<div className="pt-20 container max-w-6xl">
				<FeaturedServicesSection />
				<Presentation />
				<VideoCard />
				<Sustainableworld />
				<TeamSection />
			</div>
		</main>
	);
}

export default Home;
