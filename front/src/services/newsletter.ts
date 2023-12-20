import { NewsletterPayload, NewsletterResponse } from "@/types/api";
import api from "./api";

export const suscribeNewsletter = async (payload: NewsletterPayload) => {
	const response = await api.post<NewsletterResponse>("/newsletter", payload);
	return response.data;
};
