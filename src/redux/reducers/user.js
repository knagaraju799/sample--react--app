const getUser = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER_DETAILS":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default getUser;
