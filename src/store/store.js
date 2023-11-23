import { combineReducers, legacy_createStore as createStore } from "redux";

const reducers = combineReducers({
  jokes: "",
  favs: "",
});

export const store = createStore(reducers);
