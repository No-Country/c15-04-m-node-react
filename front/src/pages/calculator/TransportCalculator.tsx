import React, { useState } from "react";
import {
	ITransport,
	CalculateTransportFootprintPayload,
	CalculateTransportFootprintResponse,
} from "../../types/transport";

import api from "@/services/api";
import { calculateTransportFootprint } from "@/services/transportServices";

const TransportCalculator: React.FC = () => {
	const [transport, setTransport] = useState<ITransport>({ id: 0 });
	const [distance, setDistance] = useState<number>(0);
	const [footprint, setFootprint] = useState<number | null>(null);

	const calculateFootprint = async () => {
		const data = await calculateTransportFootprint({});
		// For demonstration purposes, setting a dummy value for the footprint
		setFootprint(100); // Replace this with the actual calculated footprint
	};

	return (
		<div>
			<h2>Transport Footprint Calculator</h2>
			<label>
				Transport ID:
				<input type="number" value={transport.id} onChange={(e) => setTransport({ id: parseInt(e.target.value) })} />
			</label>
			<br />
			<label>
				Distance (in km):
				<input type="number" value={distance} onChange={(e) => setDistance(parseInt(e.target.value))} />
			</label>
			<br />
			<button onClick={calculateFootprint}>Calculate Footprint</button>
			{footprint !== null && (
				<p>
					Transport ID: {transport.id}, Distance: {distance} km
					<br />
					Footprint: {footprint} units
				</p>
			)}
		</div>
	);
};

export default TransportCalculator;
