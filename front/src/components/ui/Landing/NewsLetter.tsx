import React, { useState } from "react";

const NewsLetter: React.FC = () => {
	const [name, setName] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(name, email);
	};

	return (
		<div className="px-6 py-2 md:w-3/4 ">
			<div className="md:flex bg-white shadow-lg rounded-lg p-4 x border border-gray-200 text-center flex-col md:flex-row">
				<div className="md:flex-row justify-between w-25">
					<form onSubmit={handleSubmit} className=" p-4 rounded-lg flex flex-col items-center">
						<h2 className="text-xl font-bold mb-4">Subscribete a nuestro newsletter</h2>
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
								Subscribe
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewsLetter;
