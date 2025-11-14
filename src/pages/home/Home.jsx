import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="app">
     

      <main>
        <h1>crer son cv devient un jeu d'enfant </h1>
        <p>Générez votre CV facilement ou choisissez un modèle existant.</p>
        <button className="use-model-btn1"> creer votre cv</button>
        <div className="cv-carousel">
          {[
            { id: 1, name: "Modèle Moderne", color: "#5E81F4" },
            { id: 2, name: "Modèle Élégant", color: "#00B894" },
            { id: 3, name: "Modèle Classique", color: "#FDCB6E" },
            { id: 4, name: "Modèle Minimaliste", color: "#E84393" },
            { id: 5, name: "Modèle Professionnel", color: "#0984E3" },
            { id: 6, name: "Modèle Étudiant", color: "#6C5CE7" },
            { id: 7, name: "Modèle Créatif", color: "#D63031" },
          ].map((model) => (
            <div
              key={model.id}
              className="cv-model"
              style={{ borderTop: `5px solid ${model.color}` }}
            >
              <div className="cv-model-content">
                <div
                  className="cv-sample"
                  style={{
                    backgroundColor: model.color + "20",
                    border: `1px solid ${model.color}`,
                  }}
                ></div>
                <h4>{model.name}</h4>
                <button className="use-model-btn">Utiliser</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
