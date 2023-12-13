import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

type RadialDonutProps = {
	data: any;
	options: any;
};

const RadialDonut: React.FC<RadialDonutProps> = ({ data, options }) => {
	return (
		<div className="" style={{ width: "350px", height: "350px" }}>
			<Doughnut data={data} options={options}></Doughnut>
		</div>
	);
};

export default RadialDonut;
