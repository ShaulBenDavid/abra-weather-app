import { createSlice } from "@reduxjs/toolkit";

// Types
import { RootState } from "../store";
import { SearchItemActionProps } from '../../Components/Ui/SearchResultItem/types';

type SearchProps = {
    readonly searchValue: string;
    readonly searchChoice: SearchItemActionProps | null; 
}

const initialState: SearchProps = {
    searchValue: "",
    searchChoice: null,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setSearchChoice: (state, action) => {
            state.searchChoice = action.payload;
        }
    }
})

export const { setSearchValue, setSearchChoice } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const selectSearchChoice = (state: RootState) => state.search.searchChoice;

export default searchSlice.reducer;