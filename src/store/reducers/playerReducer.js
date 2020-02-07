const initialState = {
  // direction: 'S',
  // alive: true,
  position: [0, 0]
};

const playerReducer = (state = initialState, action) => {
  console.log("playerReducer:  State: ", state, " action: ", action);
  switch (action.type) {
    case "MOVE_PLAYER":
      console.log("Move Player Payload: ", action.payload);
      return {
        ...action.payload
      };

    case "MOVE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        location: { ...state.location, ...action.payload },
        responseLog:
          action.payload.description !==
          state.responseLog[state.responseLog.length - 1].description
            ? [
                ...state.responseLog,
                {
                  title: action.payload.title,
                  description: action.payload.description
                }
              ]
            : state.responseLog
      };
    case "MOVE_ERROR":
      return {
        ...state,
        error: action.payload,
        responseLog: [
          ...state.responseLog,
          {
            title: action.payload.title,
            description: action.payload.description
          }
        ]
      };

    default:
      return state;
  }
};

export default playerReducer;
