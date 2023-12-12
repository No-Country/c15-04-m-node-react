import React from "react";

import { Button } from "@/components/ui/button";
import { Answer, Question } from "@/types/quiz";
import { transformData } from "@/utils/quiz";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Input } from "../ui/input";

interface QuizProps {
	questions?: Question[];
}

const Quiz = ({ questions = [] }: QuizProps) => {
	const [swiper, setSwiper] = React.useState<SwiperClass | null>(null);
	const [answers, setAnswers] = React.useState<Record<string, Answer>>({});
	const [isBeginning, setIsBeginning] = React.useState<boolean>(true);
	const [isEnd, setIsEnd] = React.useState<boolean>(false);

	const handleSlideChange = () => {
		if (swiper) {
			setIsBeginning(swiper.activeIndex === 0);
			setIsEnd(swiper.activeIndex === swiper.slides.length - 1);
		}
	};

	const handleNext = React.useCallback(() => {
		swiper?.slideNext();
	}, [swiper]);

	const handlePrev = React.useCallback(() => {
		swiper?.slidePrev();
	}, [swiper]);

	const handleAnswerChange = React.useCallback(
		(question: Question, answer: Answer) => {
			const isChanged = question.name in answers && answers[question.name] !== answer;

			const updatedAnswers = { ...answers, [question.name]: answer };
			const questionsToRemove: string[] = [];

			if (isChanged && question.conditions?.length) {
				question.conditions.forEach((condition) => {
					condition.questions.forEach((condQuestion) => {
						if (condQuestion.name in updatedAnswers) {
							questionsToRemove.push(condQuestion.name);
						}
					});
				});
			}

			questionsToRemove.forEach((questionName) => {
				delete updatedAnswers[questionName];
			});

			setAnswers(updatedAnswers);
		},
		[answers],
	);

	const handleSend = () => {
		console.log("Respuestas:", answers);
		const data = transformData(answers);
		console.log("Data:", data);
	};

	const renderInputField = React.useCallback(
		(question: Question) => {
			switch (question.type) {
				case "text":
					return <Input type="text" onChange={(e) => handleAnswerChange(question, e.target.value)} />;
				case "number":
					return <Input type="number" onChange={(e) => handleAnswerChange(question, e.target.value)} />;
				case "radio":
					return (
						<div>
							{question.options?.map((option) => (
								<div key={option.value as string}>
									<input
										type="radio"
										name={question.name}
										value={option.value as string}
										onChange={(e) => handleAnswerChange(question, e.target.value)}
									/>
									<label htmlFor={option.value as string}>{option.label}</label>
								</div>
							))}
						</div>
					);
				case "select":
					return (
						<select onChange={(e) => handleAnswerChange(question, e.target.value)}>
							<option value="">Selecciona una opción</option>
							{question.options?.map((option) => (
								<option key={option.value as string} value={option.value as string}>
									{option.label}
								</option>
							))}
						</select>
					);
				default:
					return null;
			}
		},
		[handleAnswerChange],
	);

	const renderQuestion = (question: Question) => {
		const condition = question.conditions?.find((condition) => condition.triggerAnswer === answers[question.name]);
		const isLastQuestion = isEnd && !condition;
		return (
			<React.Fragment key={question.name}>
				<SwiperSlide key={question.name}>
					{
						<div key={question.name} className="flex justify-center items-center h-full flex-col max-w-xs mx-auto">
							<p>{question.title}</p>
							{renderInputField(question)}
							<div className="flex gap-2 mt-2">
								{isLastQuestion ? (
									<>
										<Button onClick={handlePrev} disabled={isBeginning}>
											Anterior
										</Button>
										<Button onClick={handleSend}>Enviar</Button>
									</>
								) : (
									<>
										<Button onClick={handlePrev} disabled={isBeginning}>
											Anterior
										</Button>
										<Button onClick={handleNext} disabled={!answers[question.name]}>
											Siguiente
										</Button>
									</>
								)}
							</div>
						</div>
					}
				</SwiperSlide>
				{condition?.questions.map((question) => renderQuestion(question))}
			</React.Fragment>
		);
	};

	React.useEffect(() => {
		if (swiper) {
			setIsEnd(swiper.activeIndex === swiper.slides?.length - 1);
		}
	}, [answers, swiper]);

	return (
		<div className="bg-white-500 h-screen">
			<Swiper
				simulateTouch={false}
				allowTouchMove={false}
				keyboard={{
					enabled: false,
				}}
				mousewheel={false}
				spaceBetween={50}
				slidesPerView={1}
				onSwiper={(swiper) => {
					setSwiper(swiper);
					setIsEnd(swiper.isEnd);
				}}
				className="h-full w-full"
				onSlideChange={handleSlideChange}
			>
				{questions.map((question) => (
					<React.Fragment key={question.name}>{renderQuestion(question)}</React.Fragment>
				))}
			</Swiper>
		</div>
	);
};

export default Quiz;
