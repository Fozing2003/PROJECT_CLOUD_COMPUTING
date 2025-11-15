import React from "react";
import "./statsCard.css"; // (optionnel si tu veux la feuille de style)

function StatsCard({ title, number, icon }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">{icon}</div>
      <div className="stats-info">
        <h3>{number}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default StatsCard;
