import React from "react";

import * as userService from "@/services/userService";

import { Avatar, User, UserSignUp, UserUpdate } from "@/types/api";
import { AxiosError } from "axios";
import { useToast } from "@/components/ui/use-toast";

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
	const { toast } = useToast();

	const logIn = async (correo: string, password: string) => {
		try {
			const user = await userService.logIn({ correo, password });
			setUser(user.usuario);
			toast({
				title: "Success",
				description: "Inicio de sesión exitoso",
				variant: "default",
			});
		} catch (error) {
			if (error instanceof AxiosError && error.response?.data) {
				const data = error.response.data;
				if (data.message) {
					toast({
						title: "Error",
						description: data.message,
						variant: "destructive",
					});
				} else if (data.errors?.errors) {
					toast({
						title: "Error",
						description: data.errors.errors[0]?.msg,
						variant: "destructive",
					});
				}
			}
		}
	};

	const signUp = async (options: UserSignUp) => {
		try {
			const user = await userService.signUp(options);
			setUser(user.usuario);
		} catch (error) {
			if (error instanceof AxiosError && error.response?.data) {
				const data = error.response.data;
				if (data.message) {
					toast({
						title: "Error",
						description: data.message,
						variant: "destructive",
					});
				} else if (data.errors?.errors) {
					toast({
						title: "Error",
						description: data.errors.errors.map((err: { msg?: string }) => err?.msg ?? "-").join(", "),
						variant: "destructive",
					});
				}
			}
		}
	};

	const deleteUser = async () => {
		try {
			await userService.deleteUser();
			setUser(null);
		} catch (error) {
			if (error instanceof AxiosError && error.response?.data) {
				console.log(error.response.data);
			}
		}
	};

	const updateUser = async (options: UserUpdate) => {
		try {
			const user = await userService.updateUser(options);
			setUser(user.usuario);
		} catch (error) {
			if (error instanceof AxiosError && error.response?.data) {
				console.log(error.response.data);
			}
		}
	};

	const getAvatars = async () => {
		const avatars = await userService.getAvatars();
		setAvatars(avatars);
	};

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
