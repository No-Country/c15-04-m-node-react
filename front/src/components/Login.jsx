import React from "react";

const InputField = ({ type, id, label }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={id} className="mb-2">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        className="border border-gray-300 rounded-lg px-4 py-2"
        required
      />
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold mb-8 text-center">Login</h3>
        <InputField type="text" id="username" label="Username" />
        <InputField type="password" id="password" label="Password" />
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
