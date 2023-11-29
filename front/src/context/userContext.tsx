import React from "react";

import * as userService from "@/services/userService";

import { Avatar, User, UserSignUp, UserUpdate } from "@/types/api";

export type UserContextProps = {
	user: User | null;
	avatars: Avatar[];
	logIn: (correo: string, password: string) => Promise<void>;
	signUp: (options: UserSignUp) => Promise<void>;
	deleteUser: () => Promise<void>;
	updateUser: (options: UserUpdate) => Promise<void>;
	getAvatars: () => Promise<void>;
} | null;

export const UserContext = React.createContext<UserContextProps>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = React.useState<User | null>(null);
	const [avatars, setAvatars] = React.useState<Avatar[]>([]);

	const logIn = async (correo: string, password: string) => {
		const user = await userService.logIn({ correo, password });
		setUser(user.usuario);
	};

	const signUp = async (options: UserSignUp) => {
		const user = await userService.signUp(options);
		setUser(user.usuario);
	};

	const deleteUser = async () => {
		await userService.deleteUser();
		setUser(null);
	};

	const updateUser = async (options: UserUpdate) => {
		const user = await userService.updateUser(options);
		setUser(user.usuario);
	};

	const getAvatars = async () => {
		const avatars = await userService.getAvatars();
		setAvatars(avatars);
	};

	// React.useEffect(() => {
	// 	userService.
	// }, []);

	return (
		<UserContext.Provider
			value={{
				user,
				avatars,
				logIn,
				signUp,
				deleteUser,
				updateUser,
				getAvatars,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
