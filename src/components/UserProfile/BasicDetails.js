import React from "react";
import "./BasicDetails.scss";
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const BasicDetails = (props) => {
  const { userProfileDetails } = props;

  return (
    <div className="basicDetails">
      <div className="basicDetails--AvatarDiv">
        <AccountCircleIcon className="basicDetails--Avatar" />
      </div>

      <div className="basicDetails--Div">
        <div className="basicDetails--Div--Left">
          <span className="basicDetails--Div--Span">
            <span className="basicDetails--Div--Span--Welcome">Welcome, </span>
            <span className="basicDetails--Div--Span--Name">
              {userProfileDetails.name}
            </span>
          </span>
          <span className="basicDetails--Div--Span generalFont">
            {userProfileDetails.email}
          </span>
          <span className="basicDetails--Div--Span generalFont">
            {userProfileDetails.company}
          </span>
        </div>
        <div className="basicDetails--Button--Div">
          <Button
            className="basicDetails--Button"
            variant="contained"
            onClick={() => window.open("", "_blank")}
          >
            View User Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
