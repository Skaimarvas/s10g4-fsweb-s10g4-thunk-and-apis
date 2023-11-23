import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { jokesReducer } from "./reducers/jokeReducers";
import { favReducers } from "./reducers/favReducers";

import logger from "redux-logger";
import thunk from "redux-thunk";

const reducers = combineReducers({
  jokes: jokesReducer,
  favs: favReducers,
});

export const store = createStore(reducers, applyMiddleware(logger, thunk));
