import React from "react";
import "./ProjectDetails.scss";

const ProjectDetails = (props) => {
  console.log(props);
  const { aboutProject } = props.location;
  console.log(aboutProject);
  return (
    <div className="projectDetails">
      <h2> Project Details</h2>
      <span>Project Id : {aboutProject.project_id}</span>
      <span>Project Name : {aboutProject.project_name}</span>
      <span>Project Description : {aboutProject.project_description}</span>
    </div>
  );
};

export default ProjectDetails;
