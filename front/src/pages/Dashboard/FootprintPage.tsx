import RadialDonut from "./RadialDonut";
import React from "react";

const data = {
	labels: [],
	datasets: [
		{
			data: [30, 15, 15, 10],
			backgroundColor: ["Yellow", "Red", "Green", "Blue"],
			borderColor: "",
			borderWidth: 0,
		},
	],
};

const options = {};

// const currentMonth = "Noviembre";

const FootprintPage: React.FC = () => {
	return (
		<div className="pt-20 flex flex-col items-center">
			<div className="bg-slate-200 shadow-lg rounded-lg w-3/4 md:w-1/2 text-center mt-10">
				<h2 className="text-2xl font-bold">Tu huella es:</h2>
				<p className="text-4xl font-bold text-emerald-500">99,9</p>
				<h2 className="text-2xl font-bold text-emerald-500">Toneladas de CO2 al año</h2>
			</div>
			{/* <div className="flex justify-center items-center pt-10 ">
				<RadialDonut data={data} options={options} />
			</div> */}
		</div>
	);
};

export default FootprintPage;
