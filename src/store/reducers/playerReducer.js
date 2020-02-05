//Import all of the actions
import { MOVE_PLAYER, MOVE_SUCCESS, MOVE_ERROR } from "../actions/playerAction";

const initialState = {};

//rename actionLog/responseLog in accordance to the rest of project

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
        //returns the direction
      };
    case "MOVE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        location: { ...state.location, ...payload },
        responseLog:
          payload.description !==
          state.responseLog[state.responseLog.length - 1].description
            ? [
                ...state.responseLog,
                { title: payload.title, description: payload.description }
              ]
            : state.responseLog
      };
    case "MOVE_ERROR":
      return {
        ...state,
        error: payload,
        responseLog: [
          ...state.responseLog,
          { title: payload.title, description: payload.description }
        ]
      };

    default:
      return state;
  }
};

export default playerReducer;
