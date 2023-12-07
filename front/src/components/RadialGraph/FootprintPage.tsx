import RadialDoughnut from "@/components/RadialGraph/RadialDoughnut";
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

const currentMonth = "Noviembre";

const FootprintPage: React.FC = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold text-center py-4">Tu Huella</h1>

			<div className="flex justify-center items-center ">
				<RadialDoughnut data={data} options={options} />
			</div>
		</div>
	);
};

export default FootprintPage;
