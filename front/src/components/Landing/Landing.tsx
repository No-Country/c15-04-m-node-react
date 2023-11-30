import Footer from "../Footer/Footer";
import HeroSection from "../ui/Landing/HeroSection";
import Navbar from "../Navbar/Navbar";
import VideoCard from "../ui/Landing/VideoCard";
import Sustainableworld from "../sections/Sustainableworld/Sustainableworld";
import Presentation from "../ui/Landing/Presentation";

const Landing = () => {
	return (
		<div className="landing-container">
			<Navbar />
			<div className="flex flex-col items-center ">
				<HeroSection />
				<Presentation />
				<VideoCard />
				<div className="hero flex flex-col items-center justify-center">
					<Sustainableworld />
				</div>
			</div>
		</div>
	);
};

export default Landing;
