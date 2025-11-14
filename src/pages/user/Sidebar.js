import React from "react";

function Sidebar({ setActivePage, onLogout }) {
  return (
    <div className="sidebar">
      <h2>Tableau de bord</h2>
      <ul>
        <li onClick={() => setActivePage("mescv")}>Mes CV</li>
        <li onClick={() => setActivePage("listecv")}>Liste des CV</li>
        <li onClick={() => setActivePage("parametres")}>Paramètres</li>
      </ul>
      <button className="logout-btn" onClick={onLogout}>
        Déconnexion
      </button>
    </div>
  );
}

export default Sidebar;