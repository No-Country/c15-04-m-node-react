import { RouteObject } from "react-router-dom";

import AuthLayout from "@/layout/MainLayout/AuthLayout";

import Signup from "@/pages/Signup";
import Login from "@/pages/Login";
import { Routes } from "@/constants";

const authRoutes: RouteObject = {
	element: <AuthLayout />,
	children: [
		{
			path: Routes.SIGNUP,
			element: <Signup />,
		},
		{
			path: Routes.LOGIN,
			element: <Login />,
		},
	],
};

export default authRoutes;
