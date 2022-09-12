import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Types
type ThemeModeProps = {
  readonly theme: string;
  readonly tempMode: boolean;
};
// State
const initialState: ThemeModeProps = {
  theme: "light",
  tempMode: true,
};

export const toggleSwitchsSlice = createSlice({
  name: "toggleSwitchs",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
    toggleTempMode: (state) => {
      state.tempMode = !state.tempMode;
    },
  },
});

export const { toggleMode, toggleTempMode } = toggleSwitchsSlice.actions;

// Selector
export const selectTheme = (state: RootState) => state.toggleSwitchs.theme;
export const selectTempMode = (state: RootState) =>
  state.toggleSwitchs.tempMode;

export default toggleSwitchsSlice.reducer;
