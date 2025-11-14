import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";

function Dashboard({ onLogout }) {
  const [activePage, setActivePage] = useState("mescv");

  return (
    <div className="dashboard">
      <Sidebar setActivePage={setActivePage} onLogout={onLogout} />
      <DashboardContent activePage={activePage} />
    </div>
  );
}

export default Dashboard;