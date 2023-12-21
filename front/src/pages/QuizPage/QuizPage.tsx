import Quiz from "@/components/Quiz/Quiz";
import { useToast } from "@/components/ui/use-toast";
import { Routes } from "@/constants";
import { useUserContext } from "@/hooks/useUserContext";
import { questions } from "@/mocks/questions";
import { carbonOffsetCalculator } from "@/services/calculatorServices";
import { CarbonOffsetCalculatorPayload } from "@/types/api";
import { NestedObject } from "@/types/quiz";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
	const { updateUser, setCarbonData } = useUserContext();
	const { toast } = useToast();
	const navigate = useNavigate();

	const handleQuizSubmit = async (data: NestedObject) => {
		try {
			const response = await carbonOffsetCalculator(data as unknown as CarbonOffsetCalculatorPayload);

			await updateUser({
				electricidad: response.carbonOffset.statistics?.carbon_footprint?.electricity,
				transporteAereo: response.carbonOffset.statistics?.carbon_footprint.transport?.air ?? 0,
				transporteTerrestre: response.carbonOffset.statistics.carbon_footprint.transport.land,
				gas: response.carbonOffset.statistics.carbon_footprint.gas,
			});
			setCarbonData(response);
			toast({
				title: "Tu huella de carbono ha sido calculada",
			});
			navigate(Routes.FOOTPRINT);
		} catch (error) {
			toast({
				title: "No se pudo calcular tu huella de carbono",
				variant: "destructive",
			});
		}
	};
	return (
		<div className="pt-20 h-screen">
			<div className="flex flex-col h-full justify-center p-4">
				<Quiz questions={questions} onSubmit={handleQuizSubmit} />
			</div>
		</div>
	);
};

export default QuizPage;
