import axios, { AxiosResponse } from 'axios';
import { CarbonFootprintResponse } from "../types/api";
import { NewsletterPayload } from "../types/api"
import { GlobalConstants } from "@/constants";



const api = axios.create({
	baseURL: GlobalConstants.API_URL,
});

api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);


export const calculateCarbonFootprint = async (
	kwh: number,
	country: string,
	renewableEnergy: boolean
): Promise<CarbonFootprintResponse> => {
	try {
		const response: AxiosResponse<CarbonFootprintResponse> = await api.post(
			'/usuario/calculadora/electricidad',
			{
				electricidad: {
					kwh,
					pais: country,
					energia_renovable: renewableEnergy,
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error al calcular la huella de carbono:', error);
		throw error;
	}
};



export const subscribeToNewsletter = async (
	name: string,
	email: string,

): Promise<NewsletterPayload> => {
	try {
		const response: AxiosResponse<NewsletterPayload> = await api.post(
			'/newsletter',
			{
				nombre: name,
				correo: email,
			}
		);
		return response.data;
	} catch (error) {
		console.error('Error subscribing to newsletter:', error);
		throw error;
	}
};



export default api;
