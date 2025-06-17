import React from 'react';
import SignUpForm from '../components/Auth/SignUpForm';
import ThreeBackground from '../components/ThreeBackground';

const SignUp = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <ThreeBackground />
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-gradient-to-br from-blue-900 via-green-100 to-blue-900 rounded-2xl shadow-2xl flex max-w-5xl w-full p-6 border border-green-100">

          <div className="flex-full hidden md:block">
            <img
              src="/src/assets/TimtTrav Banner.jpg"
              alt="TimeTrav Banner"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 px-4 md:px-8">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
