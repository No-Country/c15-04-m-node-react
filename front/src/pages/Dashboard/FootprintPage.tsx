import RadialDonut from "./RadialDonut";
import React from "react";
import { Flame, Plug, Car, Plane } from "lucide-react";
import { useUserContext } from "@/hooks/useUserContext";

const gas = 25;
const electricity = 25;
const landTransport = 25;
const plane = 25;
const trees = 0;
const carDistance = 0;

const data = {
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

const options = {};

// const currentMonth = "Noviembre";

const FootprintPage: React.FC = () => {
	const { carbonData } = useUserContext();

	if (carbonData === null) {
		return null;
	}

	const { carbonOffset } = carbonData;

	const gas = carbonOffset?.statistics?.carbon_footprint?.gas ?? 0;
	console.log(gas);
	const electricity = carbonOffset?.statistics?.carbon_footprint?.electricity ?? 0;
	const landTransport = carbonOffset?.statistics?.carbon_footprint?.transport?.land ?? 0;
	const plane = carbonOffset?.statistics?.carbon_footprint?.transport?.air ?? 0;

	return (
		<div className="pt-20 flex flex-col  w-full items-center">
			<div className="shadow-lg rounded-lg w-3/4 md:w-1/2 text-center mt-10 p-10 border-solid border-2 border-emerald-500">
				<h2 className="text-2xl font-bold">Tu huella es:</h2>
				<p className="text-8xl font-bold py-10 text-emerald-500">99,9</p>
				<h2 className="text-2xl font-bold  text-emerald-500">Toneladas de CO2 al año</h2>
			</div>
			<div className="flex justify-center items-center py-10 ">
				<RadialDonut data={data} options={options} />
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
