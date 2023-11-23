import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchJoke = (joke) => {
  return { type: FETCH_SUCCESS, payload: joke };
};

export const fetchLoading = (bool) => {
  return { type: FETCH_LOADING, payload: bool };
};

export const fetchError = (error) => {
  return { type: FETCH_ERROR, payload: error };
};

//redux thunk action
export const fetchAnother =
  () =>
  //thunk function
  (dispatch, getState) => {
    dispatch(fetchLoading(true));
    axios
      .get("https://official-joke-api.appspot.com/random_jok")
      .then((res) => {
        dispatch(fetchJoke(res.data));
        dispatch(fetchLoading(false));
      })
      .catch((err) => dispatch(fetchError(err.message)));
  };
