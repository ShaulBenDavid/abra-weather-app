import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// types
type FavValidationParams = {
    title: string;
    p: string;
    primaryButton: string;
    secondaryButton: string;
}
type ChoosingFavParams = {
    country: string;
    city: string;
    keyPlace: string;
}

type FavoritesReducerParams = {
    readonly toggledFavValidation: null | FavValidationParams;
    readonly choosingFav: null | ChoosingFavParams;
    readonly favAlert: string;
}

const initialState: FavoritesReducerParams = {
    toggledFavValidation: null,
    choosingFav: null,
    favAlert: '',
}

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        setFavValidation: (state, action) => {
            state.toggledFavValidation = action.payload;
        },
        // the fav that in validation
        setChoosingFav: (state, action) => {
            state.choosingFav = action.payload;
        },
        setFavAlert: (state, action) => {
            state.favAlert = action.payload;
        }
    }
})

export const { setFavValidation, setChoosingFav, setFavAlert } = favoriteSlice.actions;

export const selectFavValidation = (state: RootState) => state.favorites.toggledFavValidation;

export const selectChosenFav = (state: RootState) => state.favorites.choosingFav;

export const selectFavAlert = (state: RootState) => state.favorites.favAlert;

export default favoriteSlice.reducer;