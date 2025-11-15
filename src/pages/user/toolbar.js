import React from "react";
import "./toolbar.css";

function Topbar({ username }) {
  return (
    <div className="topbar">
      <h1>Bienvenue, {username}</h1>

      <div className="topbar-user">
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="avatar"
          className="topbar-avatar"
        />
        <span className="topbar-username">{username}</span>
      </div>
    </div>
  );
}

export default Topbar;
