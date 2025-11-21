import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar({ setSelectedModel }) {  // ← ajouter le prop
  const [openTemplates, setOpenTemplates] = useState(false);

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">Dashboard</div>

      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/dashboard" className="sidebar-link">
              Accueil
            </Link>
          </li>

          <li>
            <div
              className="sidebar-link dropdown-toggle"
              onClick={() => setOpenTemplates(!openTemplates)}
            >
              Modèles <span className="chevron">{openTemplates ? "▲" : "▼"}</span>
            </div>

            {openTemplates && (
              <ul className="dropdown-menu">

                {/* Ici on remplace les <Link> par des <img> avec onClick */}
                <li>
                  <img
                    src="/im.png"
                    alt="Modèle 1"
                    className="miniature"
                    onClick={() => setSelectedModel("model1")} // ← ouvre le deuxième sidebar
                  />
                </li>
                <li>
                  <img
                    src="/images/model2.png"
                    alt="Modèle 2"
                    className="miniature"
                    onClick={() => setSelectedModel("model2")}
                  />
                </li>
                <li>
                  <img
                    src="/images/model3.png"
                    alt="Modèle 3"
                    className="miniature"
                    onClick={() => setSelectedModel("model3")}
                  />
                </li>

              </ul>
            )}
          </li>

          <li>
            <Link to="/settings" className="sidebar-link">
              Paramètres
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
