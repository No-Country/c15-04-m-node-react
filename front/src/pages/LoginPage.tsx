import LoginForm from "@/components/Login/LoginForm";
import React from "react";

const LoginPage = () => {
	return (
		<div>
			<div className="max-w-sm p-6 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-[347px] md:[802px]">
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
