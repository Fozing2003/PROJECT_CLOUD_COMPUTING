import React, { useState } from "react";

function RegisterForm({ onClose, onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Compte créé pour ${name}`);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom complet"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">S’inscrire</button>
        </form>
        <p>
          Déjà un compte ?{" "}
          <span className="link" onClick={onSwitch}>
            Se connecter
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;