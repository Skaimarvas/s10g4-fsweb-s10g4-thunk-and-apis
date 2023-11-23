import {
  FETCH_SUCCESS,
  FETCH_LOADING,
  FETCH_ERROR,
} from "../actions/jokeActions";

const initial = {
  current: {
    type: "general",
    setup: "How do you make the number one disappear?",
    punchline: "Add the letter G and it’s “gone”!",
    id: 392,
  },
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
