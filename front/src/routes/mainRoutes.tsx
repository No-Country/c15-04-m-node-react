import { RouteObject } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";
import Slider from "@/pages/Slider";
import Quiz from "@/pages/Quiz/Quiz";

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
			path: "/quiz",
			element: <Quiz />,
		},
	],
};

export default mainRoutes;
