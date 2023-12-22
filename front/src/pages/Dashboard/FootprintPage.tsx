import RadialDonut from "./RadialDonut";
import React from "react";
import { Flame, Plug, Car, Plane } from "lucide-react";
import { useUserContext } from "@/hooks/useUserContext";

import Tree from "@/assets/img/tree-svgrepo-com 2.svg";
import Tree2 from "@/assets/img/tree-svgrepo-com.svg";
import CarImage from "@/assets/img/car-transport-svgrepo-com.svg";

const defaultData = {
	labels: [],
	datasets: [
		{
			data: [0, 0, 0, 0],
			backgroundColor: ["#fc881c", "#00d856", "#fbff08", "#560bf5"],
			borderColor: "",
			borderWidth: 0,
		},
	],
};

const FootprintPage = () => {
	const { carbonData, getCarbonData, user } = useUserContext();
	const [carbonWeight, setCarbonWeight] = React.useState<string>("");
	const [data, setData] = React.useState<Array<string | number>>([]);
	const [graphData, setGraphData] = React.useState(defaultData);

	React.useEffect(() => {
		let mounted = true;
		const isMounted = mounted && carbonData === null && user !== null;
		if (isMounted) {
			getCarbonData();
		} else if (carbonData !== null) {
			const value = Number.parseInt(carbonData?.data?.statistics?.emission_percentage?.gas_perc, 10);
			const parsedGas = !isNaN(value) ? value : 0;

			const gas = carbonData?.data?.statistics?.emission_percentage?.gas_perc ?? 0;
			const electricity = carbonData?.data?.statistics?.emission_percentage?.electricity_perc ?? 0;
			const land = carbonData?.data?.statistics?.emission_percentage?.transport_perc.land_perc ?? 0;
			const plane = carbonData?.data?.statistics?.emission_percentage?.transport_perc.air_perc ?? 0;
			const trees = carbonData?.data?.offsets[0]?.minTrees ?? 0;
			const carDistance = carbonData?.data?.statistics?.equivalences[0]?.carDistance ?? 0;

			setGraphData((prev) => ({
				...prev,
				datasets: [
					{
						...prev.datasets[0],
						data: [parsedGas, electricity, land, plane],
					},
				],
			}));

			setData([gas, electricity, land, plane, trees, carDistance]);
			setCarbonWeight((carbonData?.data?.statistics.carbon_footprint.total / 1000).toFixed(2));
		}
		return () => {
			mounted = false;
		};
	}, [getCarbonData, carbonData, user]);

	return (
		<div className="pt-20 flex flex-col  w-full items-center">
			<div className="shadow-lg rounded-lg w-3/4 md:w-1/4 text-center mt-10 p-10 border-solid border-2 border-emerald-500">
				<h2 className="text-2xl font-bold">Tu huella es:</h2>
				<p className="text-8xl font-bold py-10 text-emerald-500">{carbonWeight}</p>
				<h2 className="text-2xl font-bold  text-emerald-500">Toneladas de CO2 al año</h2>
			</div>
			<div className="flex justify-center items-center py-10 ">
				<RadialDonut data={graphData} />
			</div>
			<DashboardCard data={data} />
		</div>
	);
};

const DashboardCard = ({ data }: { data: Array<string | number> }) => {
	return (
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
							<p>{data[0]}%</p>
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
							<p>{data[1]}%</p>
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
							<p>{data[2]}%</p>
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
							<p>{data[3]}%</p>
						</div>
					</div>
				</li>
			</ul>
			<h3 className="text-lg font-bold text-center py-4">
				Se requiere plantar {data[4]} arboles para compensar tu huella de carbono.
			</h3>
			<div className="flex justify-center items-center w-full ">
				<img src={Tree} width={80} height={20} alt="tree" />
				<img src={Tree2} width={80} height={20} alt="tree" />
			</div>
			<h3 className="text-lg font-bold text-center py-4">Tu huella equivale a recorrer {data[5]}km en auto.</h3>
			<div className="flex justify-center items-center w-full ">
				<img src={CarImage} width={80} height={20} alt="car" />
			</div>
		</div>
	);
};

export default FootprintPage;
