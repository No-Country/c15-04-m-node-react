import { RouteObject } from "react-router-dom";

import MainLayout from "@/layout/MainLayout/MainLayout";
import Home from "@/pages/Home";

const mainRoutes: RouteObject = {
	element: <MainLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
	],
};

export default mainRoutes;
