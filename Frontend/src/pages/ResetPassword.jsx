import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend reset API here
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-centerr"
      style={{
        backgroundImage: 'url(/login-bg.jpg)', // Path to the same background image used on login
      }}
    >
    <div className="absolute inset-0 bg-black opacity-40 z-0" />
      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg p-10 w-[350px]">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-40 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition block mx-auto"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
         <Link to="/login" className="text-blue-600 hover:underline flex justify-center ">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ResetPassword;
