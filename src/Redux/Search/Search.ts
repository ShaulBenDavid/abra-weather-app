import { createSlice } from "@reduxjs/toolkit";

// Types
import { RootState } from "../store";

type SearchProps = {
    readonly searchValue: string;
}

const initialState: SearchProps = {
    searchValue: "",
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    }
})

export const { setSearchValue } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export default searchSlice.reducer;