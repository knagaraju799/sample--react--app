import React, { useState, useEffect } from "react";
import "./DocumentsProcessingSummary.scss";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import DocumentsSummary from "./DocumentsSummary";
import DocumentsFinalizedSummary from "./DocumentsFinalizedSummary";
import DocumentsFinalizedChart from "../DocumentsFinalizedChart";
import IsEmpty from "../../common/components/IsEmpty";
import IsError from "../../common/components/IsError";

const DocumentsProcessingSummary = (props) => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    trackPromise(
      (async () => {
        try {
          const result = await axios(
            "https://run.mocky.io/v3/c91b65cc-ab9c-43b6-a2b9-8b0ca2ef97e7"
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
    <div className="documentsProcessingSummary">
      <div className="documentsProcessingSummary--Title">
        <span className="widgetTitle documentsProcessingSummary--Title">
          Documents Processing Summary
        </span>
      </div>
      {isError ? (
        <IsError />
      ) : isEmpty ? (
        <IsEmpty />
      ) : (
        <div className="documentsProcessingSummary--Body">
          <DocumentsSummary documentsSummary={data} />
          <DocumentsFinalizedChart documentsFinalizedSummary={data} />
          <DocumentsFinalizedSummary documentsFinalizedSummary={data} />
        </div>
      )}
    </div>
  );
};

export default DocumentsProcessingSummary;
