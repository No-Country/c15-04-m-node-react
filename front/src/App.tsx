import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
	return (
		<div className="container">
			<nav>
				<ul className="flex gap-2">
					<Link to="/">Home</Link>
					<Link to="/contact">Contact</Link>
				</ul>
			</nav>

			{/* Defining routes path and rendering components as element */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</div>
	);
}

export default App;
