import Home from "@/pages/Home";
import { RouteObject } from "react-router-dom";

import Contact from "@/pages/Contact/Contact";
import MainLayout from "@/layout/MainLayout/MainLayout";
import SignIn from "@/pages/SignIn";
import Login from "@/pages/Login";

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
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	],
};

export default mainRoutes;
