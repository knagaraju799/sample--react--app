import React from "react";
import "./IsError.scss";
import { ReactComponent as ErrorResponse } from "../../../static/icons/error--response.svg";

const IsError = (props) => {
  return (
    <div className="isError">
      <div>
        <ErrorResponse className="isError--Icon" />
        <span className="generalFont">Sorry, there was a problem</span>
      </div>
    </div>
  );
};

export default IsError;
