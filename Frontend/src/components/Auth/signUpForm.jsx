import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpForm = () => {
  // ✅ State to store form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 

  // ✅ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password
      }, {
        withCredentials: true // ✅ Enable cookies for CORS
      });

      console.log('Signup successful:', response.data);
      toast.success('Sign up successful! Redirecting to login...', {
        onClose: () => navigate('/login')
      });
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Signup failed');
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const googleUser = {
        name: decoded.name,
        email: decoded.email,
        googleId: decoded.sub,
      };

      const response = await axios.post('http://localhost:5000/api/auth/google', googleUser, {
        withCredentials: true
      });

      console.log('Google signup successful:', response.data);
      toast.success('Google sign up successful! Redirecting to login...', {
        onClose: () => navigate('/login')
      });
    } catch (error) {
      console.error('Google signup error:', error);
      toast.error('Google signup failed');
    }
  };

  const handleGoogleError = () => {
    console.error('Google signup failed');
    toast.error('Google signup failed');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4"> {/* ✅ Wrapped in a form */}
        <h2 className="text-2xl font-bold text-gray-800 justify-center flex items-center">Create Your Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name} // ✅ Controlled input
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email} // ✅ Controlled input
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password} // ✅ Controlled input
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <button
          type="submit" // ✅ Submit button
          className="w-32 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition block mx-auto"
        >
          Sign Up
        </button>

        <div className="text-center text-black-800 text-bg">or</div>

        <div className="space-y-1">
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleError}
              useOneTap
              type="standard"
              theme="outline"
              size="large"
              text="signup_with"
              shape="rectangular"
              width="240px"
            />
          </div>
        </div>

        <p className="text-center text--700 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-black-700 hover:text-blue-800 underline font-medium">
            Login
          </Link>
        </p>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SignUpForm;