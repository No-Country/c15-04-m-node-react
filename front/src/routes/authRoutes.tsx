import { RouteObject } from "react-router-dom";

import AuthLayout from "@/layout/MainLayout/AuthLayout";

import Signup from "@/pages/Signup";
import Login from "@/pages/Login";

const authRoutes: RouteObject = {
	element: <AuthLayout />,
	children: [
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	],
};

export default authRoutes;
