import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  const nav = [
    { name: "Accueil", path: "/" },
    { name: "Modèles", path: "/templates" },
    { name: "Aide", path: "/help" },
    { name: "Se connecter", path: "/login" },
  ];

  return (
    
    <header>
      <div className="nav-container">
        {nav.map((item, index) => (
          <Link key={index} to={item.path} className="nav-link">
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
