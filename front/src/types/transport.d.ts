export interface ITransport {
	id: number;
}

export interface CalculateTransportFootprintPayload {
	transport: ITransport;
	distance: number;
}

export interface CalculateTransportFootprintResponse {
	transport: ITransport;
	footprint: number;
}
