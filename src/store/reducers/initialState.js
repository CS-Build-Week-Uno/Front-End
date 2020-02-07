const initialState = {
  signUpState: {
    isLoading: false,
    isSignedUp: false,
    error: {}
  },
  loginState: {
    isLoading: false,
    isLoggedIn: false,
    error: {}
  },
  mapState: {
    isLoading: false,
    map: {},
    error: {}
  },
  gameState: {
    isLoading: false,
    location: { uuid: "", name: "", title: "", description: "", players: [] },
    position: [0, 0], // of player
    error: {},
    actionLog: [],
    chatBox: []
  }
};

export default initialState;
