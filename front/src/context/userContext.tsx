import React from "react";
import * as userService from "@/services/userService";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, User, UserResponseError, UserSignUpPayload, UserUpdatePayload } from "@/types/api";
import { AxiosError } from "axios";
import { GlobalConstants } from "@/constants";

export type UserContextProps = {
	panelOpen?: boolean;
	loading?: boolean;
	user: User | null;
	avatars: Avatar[];
	logIn: (correo: string, password: string) => Promise<void>;
	signUp: (options: UserSignUpPayload) => Promise<boolean>;
	deleteUser: () => Promise<void>;
	updateUser: (options: UserUpdatePayload) => Promise<void>;
	getAvatars: () => Promise<void>;
	setPanelOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null;

export const UserContext = React.createContext<UserContextProps>(null);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [user, setUser] = React.useState<User | null>(null);
	const [avatars, setAvatars] = React.useState<Avatar[]>([]);
	const [loading, setLoading] = React.useState(false);
	const [panelOpen, setPanelOpen] = React.useState<boolean>(false);

	const isUserAvatar = user !== null ? user.img && user.img.length > 0 : true;

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

	const signUp = async (options: UserSignUpPayload) => {
		try {
			setLoading(true);
			const data = await userService.signUp(options);
			toast({
				title: data.message,
			});
			return true;
		} catch (error) {
			if (error instanceof AxiosError) {
				handleErrors(error);
			}
			return false;
		} finally {
			setLoading(false);
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

	const updateUser = async (options: UserUpdatePayload) => {
		try {
			const user = await userService.updateUser(options);
			setUser(user.usuario);
			localStorage.setItem(GlobalConstants.USER, JSON.stringify(user.usuario));
		} catch (error) {
			if (error instanceof AxiosError) {
				handleErrors(error);
			}
		}
	};

	const getAvatars = React.useCallback(async () => {
		const { avatars } = await userService.getAvatars();
		setAvatars(avatars);
	}, []);

	React.useEffect(() => {
		userService
			.getAuth()
			.then(() => {
				const userStorage = localStorage.getItem(GlobalConstants.USER);
				setUser(userStorage ? JSON.parse(userStorage) : null);
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

	React.useEffect(() => {
		if (!isUserAvatar) {
			setPanelOpen(true);
			getAvatars();
		}
	}, [user, getAvatars, isUserAvatar]);

	return (
		<UserContext.Provider
			value={{
				panelOpen,
				loading,
				user,
				avatars,
				logIn,
				signUp,
				deleteUser,
				updateUser,
				getAvatars,
				setPanelOpen,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
