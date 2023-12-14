import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewsLetter: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [subscribed, setSubscribed] = useState(false);


	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
		  toast.error('Por favor, ingresa un correo electrónico válido.');
		  return;
		}
	  
	
		if (!name.trim()) {
		  toast.error('Por favor, ingresa un nombre válido.');
		  return; 
		}

		
		setSubscribed(true);
		setName("");
		setEmail("");
		console.log(name, email);
	};

	return (
		<div className="px-6 py-2 md:w-3/4 ">
			<div className="flex justify-center md:flex-row">
				<div className="md:flex-row w-full md:w-3/4">
					<h2 className="text-xl font-bold mb-4 px-10 pt-4 text-center md:text-2xl">
						Subscribete a nuestro <br /> newsletter
					</h2>
					<form onSubmit={handleSubmit} className=" p-4 flex flex-col items-center md:flex-row md:gap-4">
						<div className="mb-4 border border-gray-200 shadow-lg rounded-lg text-slate-400 gap-10 w-full">
							<input
								type="text"
								placeholder="Nombre"
								className="w-full px-4 py-2 rounded-l-md"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-4 border border-gray-200 shadow-lg rounded-lg text-slate-400 gap-10 w-full">
							<input
								type="email"
								placeholder="Email"
								className="w-full px-4 py-2 rounded-l-md"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-4 border bg-emerald-500 text-white  border-emerald-500 rounded-lg shadow-lg gap-10 w-1/2 ">
							<button type="submit" className=" text-start px-4 py-2 rounded-r-md">
								Subscribirse
							</button>
						</div>
					</form>

					{subscribed && (
      <div className="mt-4 text-green-500">
        ¡Te has suscrito exitosamente!
      </div>
    )}
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
