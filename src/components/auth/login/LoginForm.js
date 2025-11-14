import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm({ onClose, onSwitch, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      // login réussi simulé
      onLogin();
    } else {
      alert("Veuillez entrer vos identifiants !");
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-card">
        <h2>Connexion</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="exemple@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group password-input">
            <label>Mot de passe</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Masquer" : "Afficher"}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

          <button type="submit" className="login-btn">
            Se connecter
          </button>
        </form>

        <div className="login-footer">
          <p>
            Pas de compte ?{" "}
            <span onClick={onSwitch} className="switch-btn">
              S’inscrire
            </span>
          </p>
          <button className="close-btn" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;