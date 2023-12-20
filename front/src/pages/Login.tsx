import LoginForm from "@/components/Login/LoginForm";

function Login() {
	return (
		<div className="flex justify-center mt-20">
			<div className="flex w-screen mx-4 h-full justify-center items-center  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-[347px] md:[802px]">
				<LoginForm />
			</div>
		</div>
	);
}
export default Login;
