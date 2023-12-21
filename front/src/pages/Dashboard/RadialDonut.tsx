import { Chart as ChartJS, ArcElement } from "chart.js";
import { Doughnut, ChartProps } from "react-chartjs-2";

ChartJS.register(ArcElement);

type RadialDonutProps = {
	data: ChartProps<"doughnut">["data"];
};

const RadialDonut: React.FC<RadialDonutProps> = ({ data }) => {
	return (
		<div className="" style={{ width: "350px", height: "350px" }}>
			<Doughnut data={data}></Doughnut>
		</div>
	);
};

export default RadialDonut;
