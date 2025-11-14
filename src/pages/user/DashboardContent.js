import React, { useState } from "react";


function DashboardContent({ activePage }) {
  const [isCreating, setIsCreating] = useState(false);

  

  const renderContent = () => {
    switch (activePage) {
      case "mescv":
        return (
          <div className="content-inner">
            <h2>Mes CV</h2>
            <p>Voici la liste de vos CV enregistrés.</p>
            <button className="create-btn" onClick={() => setIsCreating(true)}>
              Créer un CV
            </button>
          </div>
        );
      case "listecv":
        return (
          <div className="content-inner">
            <h2>Liste des CV</h2>
            <p>Aucun CV généré pour le moment.</p>
          </div>
        );
      case "parametres":
        return (
          <div className="content-inner">
            <h2>Paramètres du compte</h2>
            <p>Ici, vous pouvez modifier vos informations personnelles.</p>
          </div>
        );
      default:
        return <h2>Bienvenue dans votre tableau de bord</h2>;
    }
  };

  return (
    <div className="dashboard-content">
      <div className="top-bar">
        <span className="icon">🔔</span>
        <span className="icon">☰</span>
      </div>
      {renderContent()}
    </div>
  );
}

export default DashboardContent;