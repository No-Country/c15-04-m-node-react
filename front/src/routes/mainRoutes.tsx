/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { RouteObject } from "react-router-dom";

import Loadable from "@/components/Loadable";

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
			path: "/",
			element: <Home />,
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
		{
			path: "/quiz",
			element: <QuizPage />,
		},
	],
};

export default mainRoutes;
