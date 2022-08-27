import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Types
type TempModeProps = {
  readonly tempMode: boolean;
}
// State
const initialState: TempModeProps = {
  tempMode: true,
};

export const tempModeSlice = createSlice({
  name: "tempMode",
  initialState,
  reducers: {
    toggleTempMode: (state) => {
          state.tempMode = !state.tempMode;
    },
  },
});

export const { toggleTempMode } = tempModeSlice.actions;

// Selector
export const selectTempMode = (state: RootState) => state.tempMode.tempMode;

export default tempModeSlice.reducer;
