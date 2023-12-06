import { RouteObject } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";
import Slider from "@/pages/Slider";
import FootprintPage from "@/pages/FootprintPage";

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
			path: "/footprint",
			element: <FootprintPage />,
		},
	],
};

export default mainRoutes;
