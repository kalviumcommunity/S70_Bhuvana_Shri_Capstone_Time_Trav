// src/components/Auth/ForgotPasswordForm.jsx
import { useState } from "react";

const ForgotPasswordForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-30 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800 transition block mx-auto">
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPasswordForm;
