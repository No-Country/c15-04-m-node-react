/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { RouteObject } from "react-router-dom";

import Loadable from "@/components/Loadable";
import Privacy from "@/pages/Privacy";
import { Routes } from "@/constants";

const MainLayout = Loadable(React.lazy(() => import("@/layout/MainLayout/MainLayout")));
const Home = Loadable(React.lazy(() => import("@/pages/Home")));
const FootprintPage = Loadable(React.lazy(() => import("@/pages/Dashboard/FootprintPage")));
const CalculatorPage = Loadable(React.lazy(() => import("@/pages/CalculatorPage")));
const QuizPage = Loadable(React.lazy(() => import("@/pages/QuizPage/QuizPage")));
const FAQPage = Loadable(React.lazy(() => import("@/pages/FAQPage")));

const mainRoutes: RouteObject = {
	element: <MainLayout />,
	children: [
		{
			path: Routes.MAIN,
			element: <Home />,
		},
		{
			path: Routes.CALCULATOR,
			element: <CalculatorPage />,
		},

		{
			path: Routes.FOOTPRINT,
			element: <FootprintPage />,
		},
		{
			path: Routes.FAQ,
			element: <FAQPage />,
		},
		{
			path: Routes.QUIZ,
			element: <QuizPage />,
		},

		{
			path: Routes.PRIVACY,
			element: <Privacy />,
		},
	],
};

export default mainRoutes;
