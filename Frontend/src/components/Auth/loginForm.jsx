import {useState} from "react";
import {Link , useNavigate} from "react-router-dom"; // Required for navigation
import ThreeBackground from "../components/ThreeBackground"; // adjust path if needed

const Login = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <ThreeBackground showBanner={false} /> {/* ✅ No banner for login */}

      <div className="relative z-10 bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-[350px]">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-800 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
