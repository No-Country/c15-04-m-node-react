import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { suscribeNewsletter } from "@/services/newsletter";
import { AxiosError } from "axios";

const NewsLetter: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const { toast } = useToast();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			toast({ title: "Por favor, ingresa un correo electrónico válido", variant: "destructive" });
			return;
		}

		try {
			const data = await suscribeNewsletter({ correo: email });
			setEmail("");
			console.log(data);
			toast({ title: "Subscripciónn exitosa" });
		} catch (error) {
			if (error instanceof AxiosError) {
				toast({ title: error.response?.data?.message, variant: "destructive" });
			}
		}
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
