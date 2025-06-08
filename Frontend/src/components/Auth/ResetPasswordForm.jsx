// src/components/Auth/ResetPasswordForm.jsx
import { useState } from "react";

const ResetPasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Reset Password</h2>
      <input
        type="password"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Reset Password
      </button>
    </form>
  );
};

export default ResetPasswordForm;
