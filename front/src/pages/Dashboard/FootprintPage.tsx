import RadialDonut from "./RadialDonut";
import React from "react";
import { Flame, Plug, Car, Plane } from "lucide-react";
import { useUserContext } from "@/hooks/useUserContext";
import { getCarbonFootprint } from "@/services/userService";

let gas = 25;
let electricity = 25;
let landTransport = 25;
let plane = 25;
let trees = 0;
let carDistance = 0;

const graphData = {
	labels: [],
	datasets: [
		{
			data: [gas, electricity, landTransport, plane],
			backgroundColor: ["#fc881c", "#00d856", "#fbff08", "#560bf5"],
			borderColor: "",
			borderWidth: 0,
		},
	],
};

interface OffsetItem {
	minTrees: number;
	message: string;
}

interface EquivalenceItem {
	carDistance: number;
	message: string;
}

interface CarbonFootprintData {
	data: {
		offset_by_user: any[]; // Assuming you don't have details on the structure
		offsets: OffsetItem[];
		statistics: {
			carbon_footprint: {
				electricity: number;
				gas: string;
				total: number;
			};
			transport: {
				land: number;
				air: number;
				total: number;
			};
			emission_percentage: {
				electricity_perc: number; // Assuming 0 is a number, not a string
				gas_perc: string; // Changed from number to string
				higher_emission: {
					category: string;
					value: string;
				};
				transport_perc: {
					air_perc: number;
					land_perc: number;
					total: string;
				};
			};
		};
		equivalences: EquivalenceItem[]; // Changed from any[] to EquivalenceItem[]
	};
	message: string;
}

async function getData() {
	const result: CarbonFootprintData = await getCarbonFootprint();
	gas = result.data.statistics.emission_percentage.gas_perc;
	electricity = result.data.statistics.emission_percentage.electricity_perc;
	landTransport = result.data.statistics.emission_percentage.transport_perc.land_perc;
	plane = result.data.statistics.emission_percentage.transport_perc.air_perc;
	trees = result.data.offsets[0].minTrees;
	carDistance = result.data.statistics.equivalences[0].carDistance;
	carbonWeight = (result.data.statistics.carbon_footprint.total / 1000).toFixed(2);
	console.log(gas, electricity, landTransport, plane, trees, carDistance);
}

const options = {};

getData();

// const currentMonth = "Noviembre";

const FootprintPage: React.FC = () => {
	const { carbonData } = useUserContext();
	const [carbonWeight, setCarbonWeight] = React.useState<string>("");
	const [graphData, setGraphData] = React.useState({
		labels: [],
		datasets: [
			{
				data: [0, 0, 0, 0], // Initialize with default values
				backgroundColor: ["#fc881c", "#00d856", "#fbff08", "#560bf5"],
				borderColor: "",
				borderWidth: 0,
			},
		],
	});

	React.useEffect(() => {
		async function fetchData() {
			try {
				const result: CarbonFootprintData = await getCarbonFootprint();
				// Update state with fetched data
				setGraphData({
					labels: [],
					datasets: [
						{
							data: [
								result.data.statistics.emission_percentage.gas_perc,
								result.data.statistics.emission_percentage.electricity_perc,
								result.data.statistics.emission_percentage.transport_perc.land_perc,
								result.data.statistics.emission_percentage.transport_perc.air_perc,
							],
							backgroundColor: ["#fc881c", "#00d856", "#fbff08", "#560bf5"],
							borderColor: "",
							borderWidth: 0,
						},
					],
				});
				setCarbonWeight((result.data.statistics.carbon_footprint.total / 1000).toFixed(2));
				console.log(
					result.data.statistics.emission_percentage.gas_perc,
					result.data.statistics.emission_percentage.electricity_perc,
					result.data.statistics.emission_percentage.transport_perc.land_perc,
					result.data.statistics.emission_percentage.transport_perc.air_perc,
				);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		}

		if (carbonData !== null) {
			fetchData();
		}
	}, [carbonData]);

	if (carbonData === null) {
		return null;
	}

	return (
		<div className="pt-20 flex flex-col  w-full items-center">
			<div className="shadow-lg rounded-lg w-3/4 md:w-1/2 text-center mt-10 p-10 border-solid border-2 border-emerald-500">
				<h2 className="text-2xl font-bold">Tu huella es:</h2>
				<p className="text-8xl font-bold py-10 text-emerald-500">{carbonWeight}</p>
				<h2 className="text-2xl font-bold  text-emerald-500">Toneladas de CO2 al año</h2>
			</div>
			<div className="flex justify-center items-center py-10 ">
				<RadialDonut data={graphData} options={options} />
			</div>
			<div className="flex flex-col items-start w-3/4 md:w-1/2">
				<h2 className="text-2xl font-bold text-starts">Distribución:</h2>
				<ul>
					<li>
						<div className="flex items-center py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#fc881c] items-center justify-center rounded-full ">
									<Flame size={24} />
								</div>
							</div>
							<div className="flex gap-2 ">
								<h3 className="text-xl font-bold">Gas:</h3>
								<p className="text-xl font-bold">{gas}%</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#00d856] items-center justify-center rounded-full ">
									<Plug size={24} />
								</div>
							</div>
							<div className="flex gap-2 ">
								<h3 className="text-xl font-bold">Electricidad:</h3>
								<p className="text-xl font-bold">{electricity}%</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#fbff08] items-center justify-center rounded-full ">
									<Car size={24} />
								</div>
							</div>
							<div className="flex gap-2 ">
								<h3 className="text-xl font-bold">Transporte terrestre:</h3>
								<p className="text-xl font-bold">{landTransport}%</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#560bf5] items-center justify-center rounded-full ">
									<Plane size={24} />
								</div>
							</div>
							<div className="flex gap-2 ">
								<h3 className="text-xl font-bold">Transporte aéreo:</h3>
								<p className="text-xl font-bold">{plane}%</p>
							</div>
						</div>
					</li>
				</ul>
				<h3 className="text-lg font-bold text-center py-4">
					Se requiere plantar {trees} arboles para compensar tu huella
				</h3>
				<div className="flex justify-center items-center w-full md:w-3/4">
					<img src="src/assets/img/tree-svgrepo-com 2.svg" width={80} height={20} alt="tree" />
					<img src="src/assets/img/tree-svgrepo-com.svg" width={80} height={20} alt="tree" />
				</div>
				<h3 className="text-lg font-bold text-center py-4">Tu huella equivale a recorrer {carDistance}km en auto</h3>
				<div className="flex justify-center items-center w-full md:w-3/4">
					<img src="src/assets/img/car-transport-svgrepo-com.svg" width={80} height={20} alt="car"></img>
				</div>
			</div>
		</div>
	);
};

export default FootprintPage;
