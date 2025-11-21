import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar({ avatar }) {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="topbar">
      {/* Logo CV Maker */}
      <div className="topbar-left">
        <div className="logo-box">CV</div>
        <span className="brand-name">CV Maker</span>
      </div>

      <div className="topbar-right">
        {/* Notifications */}
        <div className="notification-icon">
          🔔
          <span className="badge">3</span>
        </div>

        {/* Profil */}
        <div
          className="profile-container"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <img
            src={avatar || "/images/default-avatar.png"}
            alt="Profil"
            className="profile-avatar"
          />
          {openMenu && (
            <ul className="profile-dropdown">
              <li>
                <Link to="/profile">Mon Profil</Link>
              </li>
              <li>
                <Link to="/settings">Paramètres</Link>
              </li>
              <li>
                <Link to="/help">Aide</Link>
              </li>
              <li>
                <Link to="/logout">Déconnexion</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
