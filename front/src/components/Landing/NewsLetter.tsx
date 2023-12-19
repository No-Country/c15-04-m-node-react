import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsLetter: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [subscribed, setSubscribed] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast.error("Por favor, ingresa un correo electrónico válido.");
			return;
		}

		if (!name.trim()) {
			toast.error("Por favor, ingresa un nombre válido.");
			return;
		}

		setSubscribed(true);
		setName("");
		setEmail("");
		console.log(name, email);
	};

	return (
		<div className="flex flex-col justify-center mx-auto md:w-2/3">
			<h2 className="text-xl font-bold mb-4 px-10 pt-4 text-center md:text-2xl">
				Suscríbete a nuestro <br /> newsletter:
			</h2>
			<form onSubmit={handleSubmit} className="p-4 flex flex-col items-center md:flex-row gap-4">
				<Input
					type="text"
					placeholder="Nombre"
					className="w-full px-4 py-2 rounded-l-md max-w-xs"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="Email"
					className="w-full px-4 py-2 rounded-l-md max-w-xs"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button type="submit" className="px-4 py-2 rounded-r-md bg-emerald-500 text-white  border-emerald-500">
					Subscribirse
				</Button>
			</form>

			{subscribed && <div className="mt-4 text-green-500">¡Te has suscrito exitosamente!</div>}
		</div>
	);
};

export default NewsLetter;
