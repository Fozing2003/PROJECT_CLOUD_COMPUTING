// src/pages/user/Dashboard.jsx
import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./toolbar";
import StatsCard from "./statsCard";
import CVCard from "./cvCard";
import "./Dashboard.css";

function Dashboard() {
  const statsData = [
    { title: "CV créés", number: 5, icon: "📄", color: "#4CAF50" },
    { title: "CV publiés", number: 3, icon: "✅", color: "#2196F3" },
    { title: "CV téléchargés", number: 8, icon: "⬇️", color: "#FF9800" },
  ];

  const recentCVs = [
    { title: "Développeur Web", lastEdited: "Aujourd'hui" },
    { title: "Designer UI/UX", lastEdited: "Hier" },
    { title: "Data Scientist", lastEdited: "2 jours" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="dashboard-main">
        <Topbar username="Fozing Lise" />

        {/* Section Stats */}
        <div className="stats-section">
          {statsData.map((stat, idx) => (
            <StatsCard
              key={idx}
              title={stat.title}
              number={stat.number}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>

        {/* Section Mes CV */}
        <div className="content-section">
          <h2>Mes CV</h2>
          <button className="create-cv-btn">Créer un nouveau CV</button>
          <div className="cv-list">
            {recentCVs.map((cv, idx) => (
              <CVCard key={idx} title={cv.title} lastEdited={cv.lastEdited} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
