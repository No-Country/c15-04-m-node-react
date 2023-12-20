import React from "react";

import Quiz from "@/components/Quiz/Quiz";
import { useUserContext } from "@/hooks/useUserContext";
import { questions } from "@/mocks/questions";
import { carbonOffsetCalculator } from "@/services/calculatorServices";
import { CarbonOffsetCalculatorPayload } from "@/types/api";
import { CarbonOffset, CarbonOffsetResponse } from "@/types/carbon";
import { NestedObject } from "@/types/quiz";
const QuizPage = () => {
	const { updateUser } = useUserContext();
	const [result, setResult] = React.useState<CarbonOffsetResponse | null>(null);

	const handleQuizSubmit = async (data: NestedObject) => {
		const response = await carbonOffsetCalculator(data as unknown as CarbonOffsetCalculatorPayload);
		console.log(response);
		setResult(response);
		await updateUser({
			electricidad: response.carbonOffset.statistics?.carbon_footprint?.electricity,
			transporteAereo: response.carbonOffset.statistics?.carbon_footprint.transport?.air ?? 0,
			transporteTerrestre: response.carbonOffset.statistics.carbon_footprint.transport.land,
			gas: response.carbonOffset.statistics.carbon_footprint.gas,
		});
	};
	return (
		<div className="pt-40">
			{result === null && <Quiz questions={questions} onSubmit={handleQuizSubmit} />}
			{result !== null && <CarbonOffsetCalculator carbonOffset={result.carbonOffset} />}
		</div>
	);
};

interface CarbonOffsetCalculatorProps {
	carbonOffset: CarbonOffset | null;
}

const CarbonOffsetCalculator = ({ carbonOffset }: CarbonOffsetCalculatorProps) => {
	return (
		/* estilar */
		<div>
			<div>
				{carbonOffset?.offset_by_user?.map((item) => (
					<div>
						<p>{item}</p>
					</div>
				))}
			</div>
			<div>
				{carbonOffset?.offsets?.map((item) => (
					<div>
						<p>{item?.message}</p>
						<p>{item?.led_equivalent}</p>
						{/* <p>{item?.}</p> */}
					</div>
				))}
			</div>
			<div>
				<p>{carbonOffset?.statistics?.carbon_footprint?.electricity}</p>
				<p>{carbonOffset?.statistics?.carbon_footprint?.gas}</p>
				<p>{carbonOffset?.statistics?.carbon_footprint?.total}</p>
				<p>{carbonOffset?.statistics?.carbon_footprint?.transport.air}</p>
				<p>{carbonOffset?.statistics?.carbon_footprint?.transport.land}</p>
				<p>{carbonOffset?.statistics?.carbon_footprint?.transport.total}</p>
			</div>
		</div>
	);
};

export default QuizPage;
