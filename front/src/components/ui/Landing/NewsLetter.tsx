import React, { useState } from "react";

const NewsLetter: React.FC = () => {
	const [name, setName] = useState<string>("Nombre");
	const [email, setEmail] = useState<string>("Email");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(name, email);
	};

	return (
		<div className="px-6 py-2 md:w-3/4 ">
			<div className="flex justify-center  bg-white shadow-lg rounded-lg p-4 x border border-gray-200 text-center md:flex-rowd">
				<div className="md:flex-row w-full md:w-3/4">
					<h2 className="text-xl font-bold mb-4 px-10 pt-4 md:text-2xl">
						Subscribete a nuestro <br /> newsletter
					</h2>
					<form onSubmit={handleSubmit} className=" p-4 flex flex-col items-center md:flex-row md:gap-4">
						<div className="mb-4 border border-gray-200 shadow-lg rounded-lg text-slate-400 gap-10 w-full">
							<input
								type="text"
								placeholder="Enter your name"
								className="w-full px-4 py-2 rounded-l-md"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="mb-4 border border-gray-200 shadow-lg rounded-lg text-slate-400 gap-10 w-full">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full px-4 py-2 rounded-l-md"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className="mb-4 border text-emerald-500 border-emerald-500 rounded-lg shadow-lg gap-10 w-1/2 ">
							<button type="submit" className=" text-start px-4 py-2 rounded-r-md">
								Subscribirse
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
