import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/topbar/Topbar";
import PreviewSidebar from "../../components/previewsidebar/previewsidebar";
import { FaEye, FaTrash } from "react-icons/fa"; // ← importer les icônes
import "./Dashboard.css";

export default function Dashboard() {
  const [userName, setUserName] = useState("");
  const [cvList, setCvList] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    const fakeUser = { name: "Lise Fozing" };
    const fakeCVs = [
      { id: 1, title: "CV Développeur Web" },
      { id: 2, title: "CV Data Analyst" }
    ];

    setUserName(fakeUser.name);
    setCvList(fakeCVs);
  }, []);

  const handleDelete = (id) => {
    setCvList(cvList.filter(cv => cv.id !== id));
  };

  return (
    <div className="dashboard-layout">
      <Sidebar setSelectedModel={setSelectedModel} />
      
      <div className="dashboard-content">
        <Topbar />

        <div className="dashboard-inner">
          <h1 className="welcome-title">
            Bienvenue sur votre espace personnel, <span>{userName}</span>
          </h1>

          <button className="create-btn">+ Créer mon CV</button>

          <div className="cv-section">
            <h2>Mes CV</h2>

            {cvList.length === 0 ? (
              <p className="empty-text">Vous n’avez pas encore créé de CV.</p>
            ) : (
              <ul className="cv-list">
                {cvList.map((cv) => (
                  <li key={cv.id} className="cv-item">
                    <span>{cv.title}</span>
                    <div className="cv-actions">
                      <button className="icon-btn" title="Voir">
                        <FaEye />
                      </button>
                      <button
                        className="icon-btn delete-btn"
                        title="Supprimer"
                        onClick={() => handleDelete(cv.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {selectedModel && (
        <PreviewSidebar
          model={selectedModel}
          onClose={() => setSelectedModel(null)}
        />
      )}
    </div>
  );
}
