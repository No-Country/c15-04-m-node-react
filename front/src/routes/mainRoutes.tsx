import { RouteObject } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";
import Slider from "@/pages/Slider";
import QuizPage from "@/pages/Quiz/Quiz";

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
			element: <QuizPage />,
		},
	],
};

export default mainRoutes;
