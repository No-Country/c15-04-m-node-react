import RadialDoughnut from "@/components/RadialGraph/RadialDoughnut";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
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
			<div className="flex justify-center py-4 items-center">
				<a href="">
					<ChevronLeft className="mx-4" />
				</a>
				<h3 className="text-xl font-bold ">{currentMonth}</h3>
				<a href="">
					<ChevronRight className="mx-4" />
				</a>
			</div>
			<div className="flex justify-center items-center ">
				<RadialDoughnut data={data} options={options} />
			</div>
		</div>
	);
};

export default FootprintPage;
