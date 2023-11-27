import { PersonFill, LockFill } from "react-bootstrap-icons";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold mb-8 text-center">Login</h3>
        <label htmlFor="username" className="flex items-center mb-4">
          <PersonFill className="mr-2" /> Username:
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <label htmlFor="password" className="flex items-center mb-4">
          <LockFill className="mr-2" /> Password:
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
