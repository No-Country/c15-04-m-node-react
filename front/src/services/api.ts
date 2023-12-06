import axios from "axios";

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
		console.error(error);
		return Promise.reject(error);
	},
);


export const calculateCarbonFootprint = async (kwh, country) => {
	try {
	  const response = await api.post('/calculadora/electricidad', { kwh, pais: country });
	  return response.data; 
	} catch (error) {
	  console.error('Error al calcular la huella de carbono:', error);
	  throw error;
	}
  };

export default api;
