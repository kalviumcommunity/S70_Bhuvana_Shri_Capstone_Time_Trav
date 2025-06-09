import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    // Add reset logic here (API call etc.)
    console.log('Reset link sent to:', email);
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
        <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-40 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition block mx-auto"
          >
            Send Reset Link
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Remembered?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
