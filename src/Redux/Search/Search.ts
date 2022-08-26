import { createSlice } from "@reduxjs/toolkit";

// Types
import { RootState } from "../store";
import { CurrentPlaceProps } from '../../Components/Ui/SearchResultItem/types';

type SearchProps = {
    readonly searchValue: string;
    readonly searchChoice: CurrentPlaceProps | null;
    readonly isMobileSearchOpen: boolean;
}

const initialState: SearchProps = {
    searchValue: "",
    searchChoice: null,
    isMobileSearchOpen: false,
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
        },
        // Open and close mobile search
        setIsMobileSearchOpen: (state) => {
            state.isMobileSearchOpen = !state.isMobileSearchOpen;
        }
    }
})

export const { setSearchValue, setSearchChoice, setIsMobileSearchOpen } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const selectSearchChoice = (state: RootState) => state.search.searchChoice;

export const selectIsMobileSearchOpen = (state: RootState) => state.search.isMobileSearchOpen;

export default searchSlice.reducer;