import React from "react";
import "./IsEmpty.scss";
import { ReactComponent as EmptyResponse } from "../../../static/icons/empty--response.svg";

const IsEmpty = (props) => {
  return (
    <div>
      <div className="">
        <EmptyResponse className="frequentlyAccessedReports--Div--Icon" />
        <span className="generalFont">Got an Empty Response</span>
      </div>
    </div>
  );
};

export default IsEmpty;
