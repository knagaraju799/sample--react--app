const getUserDetails = (userObj) => {
  return {
    type: "GET_USER_DETAILS",
    payload: userObj,
  };
};

export default {
  getUserDetails,
};
