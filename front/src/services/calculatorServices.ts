import { CarbonOffsetResponse } from "@/types/carbon";
import api from "./api";

import {
	CalculateCarbonFootprintPayload,
	CalculateTransportFootprintPayload,
	CalculateTransportFootprintResponse,
	CarbonFootprintResponse,
	CarbonOffsetCalculatorPayload,
} from "@/types/api";

export const carbonOffsetCalculator = async (data: CarbonOffsetCalculatorPayload) => {
	const response = await api.post<CarbonOffsetResponse>("/usuario/calculadora/offset", data);
	return response.data;
};

export const calculateCarbonFootprint = async (
	data: CalculateCarbonFootprintPayload,
): Promise<CarbonFootprintResponse> => {
	const response = await api.post<CarbonFootprintResponse>("/usuario/calculadora/electricidad", data);
	return response.data;
};

export const calculateGasFootprint = async (m3: number, country: string): Promise<CarbonFootprintResponse> => {
	const response = await api.post<CarbonFootprintResponse>("/usuario/calculadora/gas", {
		gas: {
			m3,
			pais: country,
		},
	});
	return response.data;
};

export const calculateTransportFootprint = async (
	data: CalculateTransportFootprintPayload,
): Promise<CalculateTransportFootprintResponse> => {
	const response = await api.post<CalculateTransportFootprintResponse>("/calculadora/transporte", data);
	return response.data;
};
