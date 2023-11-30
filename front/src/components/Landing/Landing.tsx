import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import VideoCard from "../ui/Landing/VideoCard";
import Sustainableworld from "../sections/Sustainableworld/Sustainableworld";

const Landing = () => {
	return (
		<div className="landing-container">
			<Navbar />
			<body>
				<VideoCard />
				<div className="hero flex flex-col items-center justify-center">
					<Sustainableworld />
				</div>
			</body>
			<Footer />
		</div>
	);
};

export default Landing;
