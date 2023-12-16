import React from "react";

import Quiz from "@/components/Quiz/Quiz";
import { questions } from "@/mocks/questions";
import { CarbonOffsetCalculatorPayload, CarbonOffsetCalculatorResponse, CarbonOffset } from "@/types/api";
import { NestedObject } from "@/types/quiz";
import { carbonOffsetCalculator } from "@/services/calculatorServices";
const QuizPage = () => {
	const [result, setResult] = React.useState<CarbonOffsetCalculatorResponse | null>(null);

	const handleQuizSubmit = async (data: NestedObject) => {
		const response = await carbonOffsetCalculator(data as unknown as CarbonOffsetCalculatorPayload);
		setResult(response);
	};
	return (
		<div className="pt-40">
			{result === null && <Quiz questions={questions} onSubmit={handleQuizSubmit} />}
			{result !== null && <CarbonOffsetCalculator carbonOffset={result?.carbonOffset} />}
		</div>
	);
};

interface CarbonOffsetCalculatorProps {
	carbonOffset: CarbonOffset | null;
}

const CarbonOffsetCalculator = ({ carbonOffset }: CarbonOffsetCalculatorProps) => {
	return (
		<div>
			<div>
				{carbonOffset?.offset_by_user?.map((item) => (
					<div>
						<p>{item?.message}</p>
						<p>{item?.car_emission_offset}</p>
						<p>{item?.minTrees}</p>
					</div>
				))}
			</div>
			<div>
				{carbonOffset?.offsets?.map((item) => (
					<div>
						<p>{item?.message}</p>
						<p>{item?.car_emission_offset}</p>
						<p>{item?.minTrees}</p>
					</div>
				))}
			</div>
			<div>
				{carbonOffset?.statistics?.map((item) => (
					<div>
						//Estilar esto
						<p>{item?.carbon_footprint.electricity}</p>
						<p>{item?.carbon_footprint.gas}</p>
						<p>{item?.carbon_footprint.transport.air}</p>
						<p>{item?.carbon_footprint.transport.land}</p>
						<p>{item?.carbon_footprint.transport.total}</p>
						<p>{item?.carbon_footprint.total}</p>
						<p>{item?.emission_percentage.electricity_perc}</p>
						<p>{item?.emission_percentage.gas_perc}</p>
						<p>{item?.emission_percentage.higher_emission.category}</p>
						<p>{item?.emission_percentage.higher_emission.value}</p>
						<p>{item?.emission_percentage.transport_perc.air_perc}</p>
						<p>{item?.emission_percentage.transport_perc.land_perc}</p>
						<p>{item?.emission_percentage.transport_perc.total}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuizPage;
