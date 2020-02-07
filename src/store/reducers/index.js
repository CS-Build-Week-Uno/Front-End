import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import playerReducer from "./playerReducer";
import { loginReducer } from "./login";

export const rootReducer = combineReducers(
  {
    player: playerReducer,
    login: loginReducer
  }
);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
