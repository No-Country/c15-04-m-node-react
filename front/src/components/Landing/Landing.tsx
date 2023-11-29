import Footer from "../Footer/Footer";
import HeroSection from "../ui/Landing/HeroSection";
import Navbar from "../Navbar/Navbar";
import VideoCard from "../ui/Landing/VideoCard";
import Presentation from "../ui/Landing/Presentation";

const Landing = () => {
	return (
		<div className="landing-container">
			<Navbar />
			<body className="flex flex-col items-center ">
				<HeroSection />
				<Presentation />
				<VideoCard />
				<Footer />
			</body>
		</div>
	);
};

export default Landing;
