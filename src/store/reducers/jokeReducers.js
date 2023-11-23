import {
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
} from "../actions/jokeActions";

const initial = {
  current: null,
  error: null,
  loading: true,
};

export function jokesReducer(state = initial, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state;

    case FETCH_LOADING:
      return state;

    case FETCH_ERROR:
      return state;

    default:
      return state;
  }
}
