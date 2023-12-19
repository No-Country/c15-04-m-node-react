import axios from "axios";
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

export default api;
