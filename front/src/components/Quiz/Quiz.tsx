import React from "react";

import { Button } from "@/components/ui/button";
import { Answer, NestedObject, Question } from "@/types/quiz";
import { transformData } from "@/utils/quiz";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Input } from "../ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface QuizProps {
	questions?: Question[];
	onSubmit?: (data: NestedObject) => void;
}

const Quiz = ({ questions = [], onSubmit }: QuizProps) => {
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
		onSubmit?.(data);
	};

	const renderInputField = React.useCallback(
		(question: Question) => {
			switch (question.type) {
				case "text":
					return <Input type="text" onChange={(e) => handleAnswerChange(question, e.target.value)} />;
				case "number":
					return (
						<Input
							type="number"
							onChange={(e) => {
								// check if value is a number
								if (isNaN(Number(e.target.value))) {
									return;
								}
								handleAnswerChange(question, Number(e.target.value));
							}}
						/>
					);
				case "radio":
					return (
						<RadioGroup
							defaultValue="comfortable"
							onValueChange={(value) => {
								// check if value is a boolean
								if (value === "true" || value === "false") {
									handleAnswerChange(question, value === "true");
								} else {
									handleAnswerChange(question, value);
								}
							}}
						>
							{question.options?.map((option) => (
								<div className="flex items-center space-x-2" key={option.value as string}>
									<RadioGroupItem value={option.value as string} />
									<Label>{option.label}</Label>
								</div>
							))}
						</RadioGroup>
					);
				case "select":
					return (
						<Select onValueChange={(value) => handleAnswerChange(question, value)}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder={question.label} />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									{question.options?.map((option) => (
										<SelectItem key={option.value as string} value={option.value as string}>
											{option.label}
										</SelectItem>
									))}
								</SelectGroup>
							</SelectContent>
						</Select>
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
						<div className="w-full h-3/4 z-10 flex justify-center items-center">
							<div
								key={question.name}
								className="flex justify-center bg-gray-100 rounded-lg items-center flex-col h-full w-full md:w-1/4 p-6 shadow-xl mx-4"
							>
								<h2 className="text-2xl font-bold text-center p-4">{question.title}</h2>
								{renderInputField(question)}
								<div className="flex gap-2 p-4">
									{isLastQuestion ? (
										<>
											<Button
												className="bg-emerald-500 text-white hover:bg-emerald-300"
												onClick={handlePrev}
												disabled={isBeginning}
											>
												Anterior
											</Button>
											<Button className="bg-emerald-500 text-white hover:bg-emerald-300" onClick={handleSend}>
												Enviar
											</Button>
										</>
									) : (
										<>
											<Button
												className="bg-emerald-500 text-white hover:bg-emerald-300"
												onClick={handlePrev}
												disabled={isBeginning}
											>
												Anterior
											</Button>
											<Button
												className="bg-emerald-500 text-white hover:bg-emerald-400"
												onClick={handleNext}
												disabled={typeof answers[question.name] === "boolean" ? false : !answers[question.name]}
											>
												Siguiente
											</Button>
										</>
									)}
								</div>
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
