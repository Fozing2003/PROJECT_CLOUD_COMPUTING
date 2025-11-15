import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Mon Espace</h2>

      <ul className="sidebar-menu">
        <li onClick={() => navigate("/dashboard")} className="active">🏠 Dashboard</li>
        <li onClick={() => navigate("/profile")}>👤 Profil</li>
        <li onClick={() => navigate("/projects")}>📁 Mes Projets</li>
        <li onClick={() => navigate("/settings")}>⚙️ Paramètres</li>
      </ul>

      <button className="logout-btn" onClick={() => navigate("/login")}>
        Déconnexion
      </button>
    </div>
  );
}

export default Sidebar;
