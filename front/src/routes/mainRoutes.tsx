import { RouteObject } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";
import Slider from "@/pages/Slider";
import FootprintPage from "@/components/RadialGraph/FootprintPage";
import CalculatorPage from "@/pages/calculatorPage";

const mainRoutes: RouteObject = {
	element: <MainLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/slider",
			element: <Slider />,

			
		},
		{
			path: "/calculator",
			element: <CalculatorPage />,
		},
	],
};

export default mainRoutes;
