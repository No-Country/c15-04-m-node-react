import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const NewsLetter: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");

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

		setName("");
		setEmail("");
		console.log(name, email);
	};

	return (
		<div className="flex flex-col justify-center">
			<h2 className="text-xl font-bold mb-4 text-center md:text-2xl">Subscribete a nuestro newsletter</h2>
			<form onSubmit={handleSubmit} className="flex gap-2">
				<Input
					type="email"
					placeholder="Email"
					className="w-full rounded-l-md max-w-xs"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Button type="submit" className="rounded-r-md bg-emerald-500 text-white  border-emerald-500">
					Subscribirse
				</Button>
			</form>
		</div>
	);
};

export default NewsLetter;
