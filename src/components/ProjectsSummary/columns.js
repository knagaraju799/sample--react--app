import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";

const Genres = ({ values }) => {
  return (
    <div>
      <span style={{ display: "block", marginBottom: "8px" }}>
        {values.processed.count}
      </span>
      <span style={{ display: "block" }}>{values.processed.delta}</span>
    </div>
  );
};

const GetStatus = ({ values }) => {
  return (
    <div>
      {values ? (
        <FiberManualRecordIcon style={{ color: "#43a047" }} />
      ) : (
        <FiberManualRecordIcon style={{ color: "red" }} />
      )}
      <span style={{ verticalAlign: "top", marginLeft: "6px" }}>
        {values ? "Configured" : "Not Configured"}
      </span>
    </div>
  );
};

const ViewProject = ({ aboutProject }) => {
  return (
    <Button
      component={Link}
      to={{
        pathname: "/project",
        aboutProject,
      }}
      style={{
        backgroundColor: "#43a047",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      view
    </Button>
  );
};

export const COLUMNS = [
  {
    Header: "Project Name",
    accessor: "project_name",
    maxWidth: 150,
    minWidth: 150,
    width: 150,
  },
  {
    Header: "Count ( # )",
    accessor: "count",
  },
  {
    Header: "Processed",
    accessor: (d) => <Genres values={d} />,
  },

  {
    Header: "Reviewed",
    accessor: (d) => <Genres values={d} />,
  },
  {
    Header: "Review Pending",
    accessor: (d) => <Genres values={d} />,
  },
  {
    Header: "Status",
    accessor: "validation_pass",
    Cell: ({ cell: { value } }) => <GetStatus values={value} />,
  },
  {
    Header: " ",
    accessor: (d) => <ViewProject aboutProject={d} />,
    maxWidth: 10,
    minWidth: 10,
    width: 10,
  },
];
