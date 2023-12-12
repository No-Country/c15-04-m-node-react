import api from "./api";

import { CarbonOffsetCalculatorPayload, CarbonOffsetCalculatorResponse } from "@/types/api";

export const carbonOffsetCalculator = async (data: CarbonOffsetCalculatorPayload) => {
	const response = await api.post<CarbonOffsetCalculatorResponse>("/usuario/calculadora/offset", data);
	return response.data;
};
