import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// types
export type ChoosingFavParams = {
  country: string;
  city: string;
  placeKey: number;
};

type FavoritesReducerParams = {
  readonly choosingFav: null | ChoosingFavParams;
  readonly favAlert: string;
};

const initialState: FavoritesReducerParams = {
  choosingFav: null,
  favAlert: "",
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    // the fav that in validation
    setChoosingFav: (state, action) => {
      state.choosingFav = action.payload;
    },
    setFavAlert: (state, action) => {
      state.favAlert = action.payload;
    },
  },
});

export const { setChoosingFav, setFavAlert } = favoriteSlice.actions;

export const selectChosenFav = (state: RootState) =>
  state.favorites.choosingFav;

export const selectFavAlert = (state: RootState) => state.favorites.favAlert;

export default favoriteSlice.reducer;
