import Quiz from "@/components/Quiz/Quiz";
import { questions } from "@/mocks/questions";

const QuizPage = () => {
	return <Quiz questions={questions} />;
};

export default QuizPage;
