import React, { useEffect, useState } from "react";
import "./UserProfile.scss";
import BasicDetails from "./BasicDetails";
import FrequentlyAccessedReports from "./FrequentlyAccessedReports";
import Divider from "@material-ui/core/Divider";
import UserBasicDetails from "../../static/data/userDetails.json";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../redux/actions";

const UserProfile = (props) => {
  const getUser = useSelector((state) => state.getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.userActions.getUserDetails(UserBasicDetails));
  }, []);
  console.log(getUser.user);
  return (
    <div className="userProfile">
      {getUser.user !== undefined ? (
        <div className="userProfile--BasicDetails">
          <BasicDetails userProfileDetails={getUser.user} />
        </div>
      ) : (
        <></>
      )}

      <Divider />
      <div className="userProfile--FrequentlyAccessedReports">
        <FrequentlyAccessedReports />
      </div>
    </div>
  );
};

export default UserProfile;
