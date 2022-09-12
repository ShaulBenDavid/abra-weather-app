import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { logOut } from "../User/User.redux";

// Types
type ValidationParams = {
    title: string;
    p: string;
    primaryButton: string;
    secondaryButton: string;
}

type ActionValidationProps = {
    readonly validationField: ValidationParams | null
}

const initialState: ActionValidationProps = {
    validationField: null,
}

export const ActionValidationSlice = createSlice({
    name: 'actionValidation',
    initialState: initialState,
    reducers: {
        setValidationField: (state, action) => {
            state.validationField = action.payload;
        }
    },
    extraReducers: builder => {
        // Delete validation field when the user make a logout
        builder.addCase(logOut, state => {
            state.validationField = null
        });
    }
})

export const { setValidationField } = ActionValidationSlice.actions;

// Selector
export const selectValidationField = (state: RootState) => state.actionValidation.validationField;

export default ActionValidationSlice.reducer;