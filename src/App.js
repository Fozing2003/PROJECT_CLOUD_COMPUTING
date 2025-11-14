import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/auth/login/LoginForm";
import RegisterForm from "./components/auth/register/RegisterForm";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/home/Home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      {/* Header affiché sur toutes les pages */}
      <Header />

      {/* Routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {/* Footer affiché sur toutes les pages */}
      <Footer />
    </Router>
  );
}

export default App;
