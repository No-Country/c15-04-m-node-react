import React from "react";
import * as userService from "@/services/userService";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, User, UserResponseError, UserSignUp, UserUpdate } from "@/types/api";
import { AxiosError } from "axios";
import { GlobalConstants } from "@/constants";

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

	const handleErrors = (error: AxiosError<UserResponseError>) => {
		if (error.response?.data) {
			const data = error.response.data;
			if (data.message) {
				toast({
					title: data.message,
					variant: "destructive",
				});
			} else if (data.errors?.errors) {
				toast({
					title: data.errors.errors.map((err: { msg?: string }) => err?.msg ?? "-").join(", "),
					variant: "destructive",
				});
			}
		}
	};

	const logIn = async (correo: string, password: string) => {
		try {
			const user = await userService.logIn({ correo, password });
			setUser(user.usuario);
			localStorage.setItem(GlobalConstants.USER, JSON.stringify(user.usuario));
			toast({
				title: "Inicio de sesión exitoso",
			});
		} catch (error) {
			if (error instanceof AxiosError) {
				handleErrors(error);
			}
		}
	};

	const signUp = async (options: UserSignUp) => {
		try {
			const user = await userService.signUp(options);
			setUser(user.usuario);
		} catch (error) {
			if (error instanceof AxiosError) {
				handleErrors(error);
			}
		}
	};

	const deleteUser = async () => {
		try {
			await userService.deleteUser();
			setUser(null);
		} catch (error) {
			if (error instanceof AxiosError) {
				handleErrors(error);
			}
		}
	};

	const updateUser = async (options: UserUpdate) => {
		try {
			const user = await userService.updateUser(options);
			setUser(user.usuario);
		} catch (error) {
			if (error instanceof AxiosError) {
				handleErrors(error);
			}
		}
	};

	const getAvatars = async () => {
		const avatars = await userService.getAvatars();
		setAvatars(avatars);
	};

	React.useEffect(() => {
		userService
			.getAuth()
			.then((user) => {
				toast({
					title: `Bienvenido ${user.usuario}`,
				});

				setUser(
					localStorage.getItem(GlobalConstants.USER) ? JSON.parse(localStorage.getItem(GlobalConstants.USER)!) : null,
				);
			})
			.catch((err: AxiosError) => {
				if (err.response?.status === 401) {
					localStorage.removeItem(GlobalConstants.TOKEN);
					localStorage.removeItem(GlobalConstants.USER);
					toast({
						title: "Sesión expirada",
						variant: "destructive",
					});
				}
			});
	}, [toast]);
	console.log(user);
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
