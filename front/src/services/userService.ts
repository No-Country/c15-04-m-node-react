import { GlobalConstants } from "@/constants";
import {
	Avatar,
	AvatarResponse,
	UserDeleteResponse,
	UserLogin,
	UserLoginResponse,
	UserSignUp,
	UserSignUpResponse,
	UserUpdate,
	UserUpdateResponse,
	AuthResponse,
} from "../types/api";
import api from "./api";

export const getWelcome = async (): Promise<string> => {
	const response = await api.get<string>("/");
	return response.data;
};

export const getAvatars = async (): Promise<Avatar[]> => {
	const response = await api.get<AvatarResponse>("/usuario/sign-up");
	return response.data?.avatars || [];
};

export const signUp = async (data: UserSignUp): Promise<UserSignUpResponse> => {
	const response = await api.post<UserSignUpResponse>("/usuario/sign-up", data);
	const { token } = response.data;
	setToken(token);
	return response.data;
};

export const logIn = async (data: UserLogin): Promise<UserLoginResponse> => {
	const response = await api.post<UserLoginResponse>("/usuario/login", data);
	const { token } = response.data;
	setToken(token);
	return response.data;
};

export const updateUser = async (data: UserUpdate): Promise<UserUpdateResponse> => {
	const response = await api.put<UserUpdateResponse>("/usuario/actualizar", data);
	return response.data;
};

export const deleteUser = async (): Promise<UserDeleteResponse> => {
	const response = await api.delete<UserDeleteResponse>("/usuario/eliminar");
	return response.data;
};

export const getAuth = async (): Promise<AuthResponse> => {
	const response = await api.get<AuthResponse>("/usuario/auth");
	return response.data;
};

const setToken = (token: string) => {
	localStorage.setItem(GlobalConstants.TOKEN, token);
	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
