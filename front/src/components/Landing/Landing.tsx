import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VideoCard from "../ui/Landing/VideoCard";

const Landing = () => {
	return (
		<div className="landing-container">
			<Navbar />
			<body>
				<VideoCard />
			</body>
			<Footer />
		</div>
	);
};

export default Landing;
