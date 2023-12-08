import React from "react";

import { Button } from "@/components/ui/button";
import { Answer, Question } from "@/types/quiz";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { questions } from "./questions";
import { transformData } from "./utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Quiz = () => {
	const swiperRef = React.useRef<null | SwiperRef>(null);
	const [history, setHistory] = React.useState<string[]>([]);

	const { swiper } = swiperRef.current || {};

	const handleNext = (questionTitle: string) => {
		if (swiper) {
			swiper.slideNext();

			setHistory((prev) => {
				if (prev[prev.length - 1] === questionTitle) {
					return prev;
				}
				return [...prev, questionTitle];
			});
		}
	};

	const handlePrev = () => {
		if (swiper) {
			const newHistory = [...history];
			newHistory.pop();
			setHistory(newHistory);
			swiper.slidePrev();
		}
	};

	const [answers, setAnswers] = React.useState<Record<string, Answer>>({});

	const handleAnswerChange = (question: Question, answer: Answer) => {
		const isChanged = question.name in answers && answers[question.name] !== answer;

		if (isChanged && question.conditions?.length) {
			question.conditions.forEach((condition) => {
				condition.questions.forEach((question) => {
					if (question.name in answers) {
						delete answers[question.name];
					}
				});
			});
		}

		setAnswers((prev) => ({ ...prev, [question.name]: answer }));
		if (question.type === "radio" && !swiper?.isEnd) {
			handleNext(question.name);
		}
	};

	const handleSend = () => {
		console.log("Respuestas:", answers);
		const data = transformData(answers);
		console.log("Data:", data);
	};

	const renderQuestion = (question: Question) => {
		return (
			<React.Fragment key={question.name}>
				<SwiperSlide key={question.name}>
					{
						<div key={question.name} className="flex justify-center items-center h-full flex-col">
							<p>{question.title}</p>
							{renderInputField(question, handleAnswerChange)}
							<div className="flex gap-2 mt-2">
								{swiper?.isEnd ? (
									<>
										<Button onClick={() => handlePrev()} disabled={!history.length}>
											Anterior
										</Button>
										<Button onClick={handleSend}>Enviar</Button>
									</>
								) : (
									<>
										<Button onClick={() => handlePrev()} disabled={!history.length}>
											Anterior
										</Button>
										<Button onClick={() => handleNext(question.name)} disabled={!answers[question.name]}>
											Siguiente
										</Button>
									</>
								)}
							</div>
						</div>
					}
				</SwiperSlide>
				{question.conditions?.map((condition) => (
					<React.Fragment key={condition.triggerAnswer as string}>
						{condition.triggerAnswer === answers[question.name] &&
							condition.questions.map((question) => (
								<React.Fragment key={question.name}>{renderQuestion(question)}</React.Fragment>
							))}
					</React.Fragment>
				))}
			</React.Fragment>
		);
	};

	const renderInputField = (question: Question, onChange: (question: Question, answer: Answer) => void) => {
		switch (question.type) {
			case "text":
				return <input type="text" onChange={(e) => onChange(question, e.target.value)} />;
			case "number":
				return <input type="number" onChange={(e) => onChange(question, e.target.value)} />;
			case "radio":
				return (
					<div>
						{question.options?.map((option) => (
							<div key={option.value as string}>
								<input
									type="radio"
									name={question.name}
									value={option.value as string}
									onChange={(e) => onChange(question, e.target.value)}
								/>
								<label htmlFor={option.value as string}>{option.label}</label>
							</div>
						))}
					</div>
				);
			case "select":
				return (
					<select onChange={(e) => onChange(question, e.target.value)}>
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
	};

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
				ref={swiperRef}
				className="h-full w-full"
			>
				{questions.map((question) => (
					<React.Fragment key={question.name}>{renderQuestion(question)}</React.Fragment>
				))}
			</Swiper>
		</div>
	);
};

export default Quiz;
