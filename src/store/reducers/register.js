// import all of the registration actions from ../actions';

//set initial state
const regState = {
    isLoading: false,
    isRegistered: false,
    error: {}
}


export const regReducer = (state = regState, { type, payload }) => {
  switch (type) {
    case IS_REGESTERED:
      return {
        ...state,
        isLoading: true
      };

    case REG_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isRegistered: true,
        error: {}
      };
    case REG_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
};
