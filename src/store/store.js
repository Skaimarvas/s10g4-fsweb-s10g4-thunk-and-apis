import { combineReducers, legacy_createStore as createStore } from "redux";
import { jokeReducers } from "./reducers/jokeReducer";

const reducers = combineReducers({
  jokes: jokeReducers,
  favs: "",
});

export const store = createStore(reducers);
