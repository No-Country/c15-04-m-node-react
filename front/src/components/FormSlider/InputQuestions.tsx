import React, { useState } from "react";

interface InputQuestionsProps {
	onSubmit: (value: number) => void;
}

const InputQuestions = ({ onSubmit }: InputQuestionsProps) => {
	const [inputValue, setInputValue] = useState(0);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Puedes hacer alguna validación aquí antes de enviar el valor
		onSubmit(inputValue);
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<form onSubmit={handleSubmit} className="w-3/4 flex flex-col items-center justify-center ">
				<input
					type="number"
					className="border border-gray-300 p-2 rounded-md mb-2 w-1/2"
					placeholder="Escribe tu respuesta aquí"
					value={inputValue}
					onChange={(e) => setInputValue(Number(e.target.value))}
				/>
				{/* <button type="submit" className="bg-emerald-500 text-white py-2 px-4 rounded-md w-32">
					Enviar
				</button> */}
			</form>
		</div>
	);
};

export default InputQuestions;
