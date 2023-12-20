import api from "./api";

export const suscribeNewsletter = async (email: string) => {
	const response = await api.post("/newsletter", { email });
	return response.data;
};
