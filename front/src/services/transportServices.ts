import api from "./api";

import { CalculateTransportFootprintResponse, CalculateTransportFootprintPayload } from "../types/transport";

export const calculateTransportFootprint = async (
	data: CalculateTransportFootprintPayload,
): Promise<CalculateTransportFootprintResponse> => {
	const response = await api.post<CalculateTransportFootprintResponse>("/calculadora/transporte", data);
	return response.data;
};
