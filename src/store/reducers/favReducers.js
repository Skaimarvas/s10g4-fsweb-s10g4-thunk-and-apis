import { FAV_ADD, FAV_REMOVE, GET_FAVS_FROM_LS } from "../actions/favActions";

const initialState = {
  favs: [
    {
      type: "general",
      setup: "How do you make the number one disappear?",
      punchline: "Add the letter G and it’s “gone”!",
      id: 392,
    },
  ],
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export const favReducers = (state = initialState, action) => {
  switch (action.type) {
    case FAV_ADD:
      return { ...state, favs: [...state.favs, action.payload] };

    case FAV_REMOVE:
      return state;

    case GET_FAVS_FROM_LS:
      return state;

    default:
      return state;
  }
};
