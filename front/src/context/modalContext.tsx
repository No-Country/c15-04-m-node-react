import React from "react";

interface ModalContextProps {
	modalLogin: boolean;
	toggleModalLogin: () => void;
	setModalLogin: (value: boolean) => void;
}

/**
 *
 *  crear un contexto
 */
export const ModalContext = React.createContext<ModalContextProps>({
	modalLogin: false,
	toggleModalLogin: () => {},
	setModalLogin: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [modalLogin, setModalLogin] = React.useState(false);

	const toggleModalLogin = React.useCallback(() => {
		setModalLogin((prev) => !prev);
	}, []);

	const value = React.useMemo(
		() => ({
			modalLogin,
			toggleModalLogin,
			setModalLogin,
		}),
		[modalLogin, toggleModalLogin, setModalLogin],
	);

	return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
};
