const initialState = {
  loginState: {
    isLoading: false,
    isLoggedIn: false,
    error: {}
  },
  signUpState: {
    isLoading: false,
    isSignedUp: false,
    error: {}
  },
  mapState: {
    isLoading: false,
    map: {},
    error: {}
  },
  gameState: {
    isLoading: false,
    error: {}
  }
};

export default initialState;
