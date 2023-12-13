import { RouteObject } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";
import Slider from "@/pages/Slider";
import FootprintPage from "@/pages/Dashboard/FootprintPage";
import CalculatorPage from "@/pages/CalculatorPage";
import { FAQPage } from "@/pages/FAQPage";

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

		{
			path: "/footprint",
			element: <FootprintPage />,
		},
		{
			path: "/faq",
			element: <FAQPage />,
		},
	],
};

export default mainRoutes;
