import React from "react";
import "./DocumentsFinalizedChart.scss";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js";
// Chart.defaults.global.legend.display = false;
// Chart.defaults.global.tooltips.enabled = false;

const DocumentsFinalizedChart = (props) => {
  console.log(Pie);
  console.log(Chart);
  const { documentsFinalizedSummary } = props;
  const { documents_finalized_summary } = documentsFinalizedSummary;
  let state;
  if (documents_finalized_summary !== undefined) {
    var { documents_reviewed, documents_review_pending, documents_flagged } =
      documents_finalized_summary;
    state = {
      labels: [
        "Documents Reviewed",
        "Documents Review Pending",
        "Documents Flagged",
      ],
      datasets: [
        {
          backgroundColor: ["#43a047", "#000000", "#b1b1b1"],
          hoverBackgroundColor: ["#43a047", "#000000", "#b1b1b1"],
          data: [
            documents_reviewed.delta,
            documents_review_pending.delta,
            documents_flagged.delta,
          ],
        },
      ],
    };
  }

  const options = {
    legend: {
      display: false,
      position: "right",
    },
  };

  console.log(documents_finalized_summary);

  if (documents_finalized_summary !== undefined) {
    return (
      <div className="documentsFinalizedChart">
        <Pie
          className="documentsFinalizedChart--Pie"
          data={state}
          options={options}
        />
      </div>
    );
  } else return <></>;
};

export default DocumentsFinalizedChart;
