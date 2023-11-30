export interface User {
	nombre: string;
	correo: string;
	password: string;
	edad: number;
	electricidad: string;
	gas: string;
	transporte: string;
	estado: boolean;
	img: string;
}

export interface UserResponse {
	message: string;
	usuario: User;
}
export interface ResponseErrorMessage {
	msg: string;
}
export interface UserResponseError {
	message?: string;
	errors?: { errors: ResponseErrorMessage[] };
}
export interface UserLogin {
	correo: string;
	password: string;
}

export interface UserLoginResponse {
	message: string;
	usuario: User;
	token: string;
}

export interface UserSignUp {
	nombre: string;
	correo: string;
	password: string;
	img?: string;
}

export interface UserSignUpResponse {
	message: string;
	usuario: User;
	token: string;
}

export type UserUpdate = Partial<User>;

export interface UserUpdateResponse {
	message: string;
	usuario: User;
}

export interface UserDeleteResponse {
	message: string;
}

export interface Avatar {
	descripcion;
	url;
}

export interface AvatarResponse {
	avatars: Avatar[];
}
