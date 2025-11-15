// src/pages/user/CVCard.jsx
import React from "react";
import "./cvCard.css";

function CVCard({ title, lastEdited }) {
  return (
    <div className="cv-card">
      <h3>{title}</h3>
      <p>Dernière modification : {lastEdited}</p>
      <div className="cv-actions">
        <button>Voir</button>
        <button>Éditer</button>
        <button>Dupliquer</button>
        <button>Supprimer</button>
      </div>
    </div>
  );
}

export default CVCard;
