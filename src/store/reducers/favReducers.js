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
const storageData = readFavsFromLocalStorage();
export const favReducers = (state = initialState, action) => {
  switch (action.type) {
    case FAV_ADD:
      const favEkle = {
        ...state,
        favs: !state.favs.includes(action.payload)
          ? [...state.favs, action.payload]
          : state.favs,
      };
      writeFavsToLocalStorage(favEkle);
      return favEkle;

    case FAV_REMOVE:
      return {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload),
      };

    case GET_FAVS_FROM_LS:
      return { ...state, favs: storageData };

    default:
      return state;
  }
};
