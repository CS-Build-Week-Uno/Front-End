import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playerReducer from "./playerReducer";
import { loginReducer } from "./login";
import initialState from "./initialState"

export const rootReducer = combineReducers(
  {
    player: playerReducer,
    login: loginReducer,
    initialState: initialState,
  }
);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
