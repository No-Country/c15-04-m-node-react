import { calculateCarbonFootprint } from "@/services/calculatorServices";
import React, { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const CalculatorComponent = () => {
	const [kwh, setKwh] = useState<number | "">("");
	const [country, setCountry] = useState("");
	const [renewableEnergy, setRenewableEnergy] = useState(false);
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState<number | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			setLoading(true);

			if (kwh === "" || isNaN(Number(kwh))) {
				throw new Error("El valor de Consumo (kWh) debe ser numérico y no puede estar vacío");
			}

			if (country === "" || !/^[a-zA-Z\s]+$/.test(country)) {
				throw new Error("El campo País debe contener solo letras y no puede estar vacío");
			}

			const lowercaseCountry = country.toLowerCase();

			const footprintResult = await calculateCarbonFootprint({
				electricidad: {
					kwh: Number(kwh),
					pais: lowercaseCountry,
					energia_renovable: renewableEnergy,
				},
			});

			let resultNumber = 0;

			if (footprintResult && typeof footprintResult.carbon_footprint !== "undefined") {
				resultNumber = footprintResult.carbon_footprint;
			}

			setResult(resultNumber);

			toast.success("Huella calculada con éxito");
		} catch (error) {
			const errorMessage = (error as Error).message;
			toast.error(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center w-full h-screen bg-gray-200 text-black">
			<h1 className="text-2xl font-bold mb-4">Calculadora Huella Carbono</h1>

			<form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>
				<label>
					Consumo (kWh):
					<input
						className="m-4"
						type="number"
						value={kwh}
						onChange={(e) => {
							const value = e.target.value;
							setKwh(value === "" ? value : parseInt(value));
						}}
					/>
				</label>

				<label>
					País:
					<input className="ml-4" type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
				</label>

				<label>
					Renovable:
					<input
						className="ml-4"
						type="checkbox"
						checked={renewableEnergy}
						onChange={(e) => setRenewableEnergy(e.target.checked)}
					/>
				</label>

				<button className="bg-emerald-500 text-white py-2 px-4 rounded-md mt-4" type="submit" disabled={loading}>
					{loading ? "Calculando..." : "Calcular Huella"}
				</button>
			</form>

			{result !== null && (
				<div className="mt-4 bg-emerald-500 py-2 px-4 rounded-md">
					<h2>Resultado:</h2>

					<p className="text-white m-3">Tu huella de carbono es: {result}</p>
				</div>
			)}
		</div>
	);
};

export default CalculatorComponent;
