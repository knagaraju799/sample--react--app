import React, { useEffect, useState } from "react";
import "./ProjectsSummary.scss";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import ProjectSummaryTable from "./ProjectSummaryTable";
import Button from "@material-ui/core/Button";
// import MOCK_DATA from "../../static/data/projectSummary.json"; // Used for testing
import { Link } from "react-router-dom";

const ProjectsSummary = (props) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  console.log(data);

  useEffect(() => {
    trackPromise(
      (async () => {
        try {
          const result = await axios(
            "https://run.mocky.io/v3/d38eae25-0e0a-406f-8efe-f00c100895e2"
          );
          if (result.data.data === null) {
            setIsEmpty(true);
          } else {
            setData(result.data.data);
          }
        } catch (error) {
          setIsError(true);
          console.log(error);
        }
      })()
    );
  }, []);

  return (
    <div className="projectsSummary">
      <div className="projectsSummary--TitleDiv">
        <span className="widgetTitle">Projects Summary</span>
        <span className="projectsSummary--TitleDiv--ButtonDiv">
          <Button
            className="projectsSummary--TitleDiv--ButtonDiv--ViewProjects"
            variant="outlined"
            component={Link}
            to="/projects"
          >
            View Projects
          </Button>
        </span>
      </div>
      <ProjectSummaryTable rowData={data} isError={isError} isEmpty={isEmpty} />
    </div>
  );
};

export default ProjectsSummary;
