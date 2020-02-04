// import all of the login actions from ../actions';

//set initial state
/*loginState: {
    loading: false,
    loggedin: false,
    errors: {}
}


*/

export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case IS_LOGGING_IN:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: {}
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };

    case LOGOUT:
      return {
        ...state,

        isLoggedIn: false
      };
    default:
      return state;
  }
};
