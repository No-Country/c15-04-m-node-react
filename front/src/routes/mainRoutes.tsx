import React from "react";
import { RouteObject } from "react-router-dom";

import Loadable from "@/components/Loadable";

const MainLayout = Loadable(React.lazy(() => import("@/layout/MainLayout/MainLayout")));
const Home = Loadable(React.lazy(() => import("@/pages/Home")));
const Slider = Loadable(React.lazy(() => import("@/pages/Slider")));
const FootprintPage = Loadable(React.lazy(() => import("@/pages/Dashboard/FootprintPage")));
const CalculatorPage = Loadable(React.lazy(() => import("@/pages/CalculatorPage")));
const QuizPage = Loadable(React.lazy(() => import("@/pages/QuizPage/QuizPage")));

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
			path: "/quiz",
			element: <QuizPage />,
		},
		{
			path: "/footprint",
			element: <FootprintPage />,
		},
	],
};

export default mainRoutes;
