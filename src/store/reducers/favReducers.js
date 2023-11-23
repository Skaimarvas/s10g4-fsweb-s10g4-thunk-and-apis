import { toast } from "react-toastify";
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
      const favAdd = {
        ...state,
        favs: !state.favs.includes(action.payload)
          ? [...state.favs, action.payload]
          : state.favs,
      };
      toast.success("Favorilere Eklendi");
      writeFavsToLocalStorage(favAdd);
      return favAdd;
      break;

    case FAV_REMOVE:
      const favRem = {
        ...state,
        favs: state.favs.filter((item) => item.id !== action.payload),
      };
      writeFavsToLocalStorage(favRem);
      toast.success("Favorilerden Çıkarıldı");
      return favRem;
      break;

    case GET_FAVS_FROM_LS:
      toast.info("Sayfa ve favoriler yüklendi.");
      return { ...state, favs: storageData };
      break;

    default:
      return state;
      break;
  }
};
