import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sustainableworld from "../sections/Sustainableworld/Sustainableworld";

const Landing = () => {
	return (
		<div className="landing-container">
			<Navbar />
			<body>
				<div className="hero flex flex-col items-center justify-center">
					<h1 className="text-2xl p-4">Lorem ipsum</h1>
					<h2 className="text-xl p-2">Lorem Ipsum</h2>
					<h3 className="text-lg p-2">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eaque exercitationem minus delectus, et neque
						recusandae odit distinctio. Repellat maxime suscipit mollitia pariatur soluta eligendi repudiandae vero
						debitis nobis id!
					</h3>
					<img src="https://placehold.it/300" alt="" />
					<h5 className="text-sm p-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
				</div>
				<Sustainableworld />
			</body>
			<Footer />
		</div>
	);
};

export default Landing;
