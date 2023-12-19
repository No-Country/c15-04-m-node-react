import { ModalContext } from "@/context/modalContext";
import React from "react";

const useModalContext = () => {
	const context = React.useContext(ModalContext);
	if (!context) {
		throw new Error("useModalContext must be used within a ModalProvider");
	}
	return context;
};

export default useModalContext;
