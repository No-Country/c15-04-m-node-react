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

	localStorage.setItem("token", token);

	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	return response.data;
};

export const logIn = async (data: UserLogin): Promise<UserLoginResponse> => {
	const response = await api.post<UserLoginResponse>("/usuario/login", data);
	const { token } = response.data;

	localStorage.setItem("token", token);

	api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
