import { combineReducers, legacy_createStore as createStore } from "redux";
import { jokesReducer } from "./reducers/jokeReducers";

// const reducers = combineReducers({
//     jokes:
// })

export const store = createStore(jokesReducer);
