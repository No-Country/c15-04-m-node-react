import Home from "@/pages/Home/Home";
import { RouteObject } from "react-router-dom";

import Contact from "@/pages/Contact/Contact";
import MainLayout from "@/layout/MainLayout/MainLayout";
import UIComponents from "@/pages/UIComponents/UIComponents";

const mainRoutes: RouteObject = {
	element: <MainLayout />,
	children: [
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/contact",
			element: <Contact />,
		},
		{
			path: "/uicomponents",
			element: <UIComponents />,
		},
	],
};

export default mainRoutes;
