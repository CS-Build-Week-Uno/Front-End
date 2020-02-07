import { createStore, combineReducers } from "redux";
import playerReducer from "./playerReducer";
import {loginReducer} from "./login";

export const rootReducer = combineReducers({
  player: playerReducer,
  login: loginReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
