export interface User {
	nombre: string;
	correo: string;
	password: string;
	edad: number;
	electricidad: number;
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
	id: string;
	descripcion: string;
	url: string;
}

export interface AvatarResponse {
	avatars: Avatar[];
}

export interface AuthResponse {
	message: string;
	isTokenValid: boolean;
	usuario: string;
	img: string;
}

export interface AuthResponseError {
	message: string;
	isTokenValid?: boolean;
}

export interface CarbonOffsetCalculatorPayload {
	residence: string;
	transport: {
		public: number;
		bus: {
			kms: number;
		};
		colectivo: {
			kms: number;
		};
		metro: {
			kms: number;
		};
		car: {
			kms: number;
			size: string;
			fuel: boolean;
		};
		motorcycle: {
			kms: number;
		};
		airplane: {
			kms: number;
			numberOfSeats: number;
			rounTrip: boolean;
		};
	};
	bike: {
		kms: number;
	};
	walk: {
		kms: number;
	};
	electricity: {
		renewable_source: boolean;
		consumption: number;
	};
	project: string;
	gas: {
		type: string;
		units: string;
		consumption: number;
	};
}

export interface CarbonOffsetCalculatorResponse {
	carbonOffset: CarbonOffset;
}

export interface CarbonOffset {
	offsets: Array<Offset>;
	offset_by_user: Array<Offset>;
	statistics: Array<Statistics>;
}

export interface Offset {
	minTrees?: number;
	car_emission_offset?: number;
	message: string;
}

export interface HigherEmission {
	category: string;
	value: number;
}

export interface Statistics {
	carbon_footprint: {
		transport: number;
		gas: number;
		electricity: number;
		total: number;
	};
	emission_percentage: {
		transport_perc: number;
		gas_perc: number;
		electricity_perc: number;
		higher_emission: HigherEmission;
	};
}


export interface CarbonFootprintResponse {
	kwh: number;
	country: string;
	energia_renovable: boolean;
	carbon_footprint?: number

}

export interface NewsletterPayload {
	nombre: string;
	correo: string;
}
