import React from "react";

const Login = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/login-bg.jpg')", // Make sure image is in /public folder
      }}
    >
      {/* ✅ Removed ThreeBackground – using image instead */}

      <div className="absolute inset-0 bg-black opacity-40 z-0" /> {/* Optional dark overlay */}

      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back!</h2>

        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-2 p-2 border border-gray-300 rounded"
          />

          {/* Forgot Password Link */}
          <div className="text-center mb-4">
            <a
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-32 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition block mx-auto"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <a
            href="/"
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
