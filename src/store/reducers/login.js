import {LOGGING_IN_CHECK, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT, CLEAR_ACTION_LOG} from "../actions/loginAction";


//set initial state
const loginState = {
    isLoading: false,
    isLoggedIn: false,
    error: {}
}


export const loginReducer = (state = loginState, { type, payload }) => {
  switch (type) {
    case LOGGING_IN_CHECK:
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
