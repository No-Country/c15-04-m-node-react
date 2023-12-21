export const GlobalConstants = {
	API_URL: import.meta.env.VITE_API_URL || "http://localhost:8080/api",
	TOKEN: "token",
	USER: "user",
};

export const Routes = {
	MAIN: "/",
	SIGNUP: "/signup",
	LOGIN: "/login",
	CALCULATOR: "/calculator",
	FOOTPRINT: "/footprint",
	FAQ: "/faq",
	QUIZ: "/quiz",
	PRIVACY: "/privacy",
};
