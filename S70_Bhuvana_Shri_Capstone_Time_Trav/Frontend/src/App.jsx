import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './pages/signUp';
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import GoogleOAuthConfig from './components/Auth/GoogleOAuthConfig';


const App = () => (
  <GoogleOAuthConfig>
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
     
    </Routes>
  </GoogleOAuthConfig>
);

export default App;
