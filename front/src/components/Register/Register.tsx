import React from "react";
interface InputFieldProps {
	type: string;
	id: string;
	label: string;
}

const InputField = ({ type, id, label }: InputFieldProps) => {
	return (
		<div className="flex flex-col mb-4">
			<label htmlFor={id} className="mb-2">
				{label}:
			</label>
			<input type={type} id={id} className="border border-gray-300 rounded-lg px-4 py-2" required />
		</div>
	);
};

const Register = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="bg-white rounded-lg shadow-lg p-8">
				<h3 className="text-xl font-bold mb-8 text-center">Register</h3>
				<InputField type="text" id="username" label="Username" />
				<InputField type="email" id="email" label="Email" />
				<InputField type="password" id="password" label="Password" />
				<InputField type="password" id="confirm-password" label="Confirm Password" />
				<div className="flex justify-center">
					<button className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2">Register</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
