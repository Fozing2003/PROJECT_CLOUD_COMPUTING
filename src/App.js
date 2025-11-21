import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/auth/login/LoginForm";
import RegisterForm from "./components/auth/register/RegisterForm";
import Dashboard from "./pages/user/Dashboard";
import Home from "./pages/home/Home";

import MainLayout from "./layouts/MainLayout"; // Layout avec Header/Footer

function App() {
  return (
    <Router>
      <Routes>
        {/* Pages SANS Header/Footer */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Pages AVEC Header/Footer */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />

        {/* Dashboard SANS Header/Footer */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
