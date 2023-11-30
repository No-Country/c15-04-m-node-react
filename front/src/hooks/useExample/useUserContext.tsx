import React from "react";
import { UserContext } from "@/context/userContext";

export const useUserContext = () => {
	const context = React.useContext(UserContext);
	if (!context) throw new Error("useUserContext debe estar dentro del proveedor UserContext");
	return context;
};
