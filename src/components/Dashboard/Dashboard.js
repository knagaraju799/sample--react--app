import React from "react";
import "./Dashboard.scss";
import UserProfile from "../UserProfile";
import DocumentsProcessingSummary from "../DocumentsProcessingSummary";
import ProjectsSummary from "../ProjectsSummary";

const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <span className="widgetTitle">Dashboard</span>
      <div className="dashboard--Top">
        <UserProfile />
        <DocumentsProcessingSummary />
      </div>
      <ProjectsSummary />
    </div>
  );
};

export default Dashboard;
