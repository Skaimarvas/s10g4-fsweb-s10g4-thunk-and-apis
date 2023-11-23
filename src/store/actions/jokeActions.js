import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const toggleJoke = (joke) => {
  return { type: FETCH_SUCCESS, payload: joke };
};

//redux thunk action
export const fetchAnother =
  () =>
  //thunk function
  (dispatch, getState) => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => dispatch(toggleJoke(res.data)));
  };
