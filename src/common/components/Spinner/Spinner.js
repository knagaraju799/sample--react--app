import React from "react";
import "./Spinner.scss";
import { usePromiseTracker } from "react-promise-tracker";
import Loader from "react-loader-spinner";

const Spinner = (props) => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    promiseInProgress && (
      <div className="spinner">
        <Loader type="Oval" color="#2BAD60" height="100" width="100" />
      </div>
    )
  );
};

export default Spinner;
