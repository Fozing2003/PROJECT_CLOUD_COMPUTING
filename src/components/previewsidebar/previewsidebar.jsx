import React from "react";
import "./previewsidebar.css";

export default function PreviewSidebar({ model, onClose }) {
  return (
    <aside className="preview-sidebar">
      {/* En-tête avec le titre et la croix */}
      <div className="preview-header">
        <h3>Prévisualisation</h3>
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      {/* Image du modèle */}
      <img
        src={`/images/${model}.png`}
        alt={`Prévisualisation ${model}`}
        className="preview-image"
      />
    </aside>
  );
}
