import React from "react";
import "./FrequentlyAccessedReports.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ProjectSummary } from "../../static/icons/projects-summary.svg";
import { ReactComponent as DailyDocuments } from "../../static/icons/daily-documents.svg";
import { ReactComponent as DocumentType } from "../../static/icons/document-type.svg";
import { ReactComponent as WeeklyChange } from "../../static/icons/weekly-change-logs.svg";

const FrequentlyAccessedReports = (props) => {
  return (
    <div className="frequentlyAccessedReports">
      <div className="sectionTitle frequentlyAccessedReports--Title">
        Frequently Accessed Reports
      </div>
      <div className="frequentlyAccessedReports--SvgList">
        <Link to="/projects_summary" className="link">
          <div className="frequentlyAccessedReports--Div">
            <ProjectSummary className="frequentlyAccessedReports--Div--Icon" />
            <span className="generalFont">Projects Summary</span>
          </div>
        </Link>
        <Link to="/document_types" className="link">
          <div className="frequentlyAccessedReports--Div">
            <DocumentType className="frequentlyAccessedReports--Div--Icon" />
            <span className="generalFont">Document Type Summary</span>
          </div>
        </Link>
        <Link to="/daily_documents" className="link">
          <div className="frequentlyAccessedReports--Div">
            <DailyDocuments className="frequentlyAccessedReports--Div--Icon" />
            <span className="generalFont">Daily Documents Added Count</span>
          </div>
        </Link>
        <Link to="/weekly_change_logs" className="link">
          <div className="frequentlyAccessedReports--Div">
            <WeeklyChange className="frequentlyAccessedReports--Div--Icon" />
            <span className="generalFont">Weekly Change Logs</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FrequentlyAccessedReports;
