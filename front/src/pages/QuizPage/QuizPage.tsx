import React from "react";

import Quiz from "@/components/Quiz/Quiz";
import { questions } from "@/mocks/questions";
import { CarbonOffsetCalculatorPayload, CarbonOffsetCalculatorResponse } from "@/types/api";
import { NestedObject } from "@/types/quiz";
import { carbonOffsetCalculator } from "@/services/calculatorServices";
const QuizPage = () => {
	const [result, setResult] = React.useState<CarbonOffsetCalculatorResponse | null>(null);

	const handleQuizSubmit = async (data: NestedObject) => {
		const response = await carbonOffsetCalculator(data as unknown as CarbonOffsetCalculatorPayload);
		setResult(response);
	};
	console.log(result);
	return <Quiz questions={questions} onSubmit={handleQuizSubmit} />;
};

export default QuizPage;
