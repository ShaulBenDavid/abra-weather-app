import { createSlice } from "@reduxjs/toolkit";

// Types
import { RootState } from "../store";
import { FavoriteItemPayloadProps } from "../../Pages/Favorites/Components/FavoriteItem/types";

type SearchProps = {
    readonly searchValue: string;
    readonly searchChoice: FavoriteItemPayloadProps | null;
    readonly isMobileSearchOpen: boolean;
    readonly isLoadingWeatherData: boolean;
}

const initialState: SearchProps = {
    searchValue: "",
    searchChoice: null,
    isMobileSearchOpen: false,
    isLoadingWeatherData: false
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        // Set the place of the search choice
        setSearchChoice: (state, action) => {
            state.searchChoice = action.payload;
            state.isLoadingWeatherData = true;
        },
        // Open and close mobile search
        setIsMobileSearchOpen: (state) => {
            state.isMobileSearchOpen = !state.isMobileSearchOpen;
        },
        setIsLoadingWeatherData: (state, action) => {
            state.isLoadingWeatherData = action.payload;
        }
    }
})

export const { setSearchValue, setSearchChoice, setIsMobileSearchOpen, setIsLoadingWeatherData } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const selectSearchChoice = (state: RootState) => state.search.searchChoice;

export const selectIsMobileSearchOpen = (state: RootState) => state.search.isMobileSearchOpen;

export const selectLoadingWeather = (state: RootState) => state.search.isLoadingWeatherData;

export default searchSlice.reducer;