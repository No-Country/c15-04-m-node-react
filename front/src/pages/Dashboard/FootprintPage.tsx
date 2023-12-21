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
let carbonWeight = "";

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

const FootprintPage: React.FC = () => {
	const { carbonData } = useUserContext();
	const [carbonWeight, setCarbonWeight] = React.useState<string>("");
	const [graphData, setGraphData] = React.useState({
		labels: [],
		datasets: [
			{
				data: [0, 0, 0, 0],
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
			<div className="shadow-lg rounded-lg w-3/4 md:w-1/4 text-center mt-10 p-10 border-solid border-2 border-emerald-500">
				<h2 className="text-2xl font-bold">Tu huella es:</h2>
				<p className="text-8xl font-bold py-10 text-emerald-500">{carbonWeight}</p>
				<h2 className="text-2xl font-bold  text-emerald-500">Toneladas de CO2 al año</h2>
			</div>
			<div className="flex justify-center items-center py-10 ">
				<RadialDonut data={graphData} options={options} />
			</div>
			<div className="flex flex-col items-center w-3/4 md:w-1/2 pb-14">
				<h2 className="text-xl font-bold py-3">Distribución:</h2>
				<ul>
					<li>
						<div className="flex items-center py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#fc881c] items-center justify-center rounded-full ">
									<Flame size={24} />
								</div>
							</div>
							<div className="flex font-bold gap-2 ">
								<h3>Gas:</h3>
								<p>{gas}%</p>
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
							<div className="flex gap-2 font-bold">
								<h3>Electricidad:</h3>
								<p>{electricity}%</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center font-bold py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#fbff08] items-center justify-center rounded-full ">
									<Car size={24} />
								</div>
							</div>
							<div className="flex gap-2 ">
								<h3>Transporte terrestre:</h3>
								<p>{landTransport}%</p>
							</div>
						</div>
					</li>
					<li>
						<div className="flex items-center font-bold py-4">
							<div className="pr-3">
								<div className="flex w-8 h-8 bg-[#560bf5] items-center justify-center rounded-full ">
									<Plane size={24} />
								</div>
							</div>
							<div className="flex gap-2 ">
								<h3>Transporte aéreo:</h3>
								<p>{plane}%</p>
							</div>
						</div>
					</li>
				</ul>
				<h3 className="text-lg font-bold text-center py-4">
					Se requiere plantar {trees} arboles para compensar tu huella de carbono.
				</h3>
				<div className="flex justify-center items-center w-full ">
					<img src="src/assets/img/tree-svgrepo-com 2.svg" width={80} height={20} alt="tree" />
					<img src="src/assets/img/tree-svgrepo-com.svg" width={80} height={20} alt="tree" />
				</div>
				<h3 className="text-lg font-bold text-center py-4">Tu huella equivale a recorrer {carDistance}km en auto.</h3>
				<div className="flex justify-center items-center w-full ">
					<img src="src/assets/img/car-transport-svgrepo-com.svg" width={80} height={20} alt="car"></img>
				</div>
			</div>
		</div>
	);
};

export default FootprintPage;
