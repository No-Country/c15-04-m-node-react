import React from "react";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-xl font-bold mb-8 text-center">Register</h3>
        <label htmlFor="username" className="flex items-center mb-4">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <label htmlFor="email" className="flex items-center mb-4">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <label htmlFor="password" className="flex items-center mb-4">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <label htmlFor="confirm-password" className="flex items-center mb-4">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm-password"
          className="border border-gray-300 rounded-lg px-4 py-2 mb-4"
        />
        <div className="flex justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 hover:">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
