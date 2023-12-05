import { RouteObject } from "react-router-dom";

import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";
import Slider from "@/pages/Slider";

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
	],
};

export default mainRoutes;
