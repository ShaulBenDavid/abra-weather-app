import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Types
type ThemeModeProps = {
  readonly theme: string;
  readonly tempMode: boolean;
  readonly mapIsOpen: boolean;
};
// State
const initialState: ThemeModeProps = {
  theme: "light",
  tempMode: true,
  mapIsOpen: false,
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
    toggleMapIsOpen: (state) => {
      state.mapIsOpen = !state.mapIsOpen;
    },
  },
});

export const { toggleMode, toggleTempMode, toggleMapIsOpen } = toggleSwitchsSlice.actions;

// Selector
export const selectTheme = (state: RootState) => state.toggleSwitchs.theme;
export const selectMapIsOpen = (state: RootState) => state.toggleSwitchs.mapIsOpen;
export const selectTempMode = (state: RootState) =>
  state.toggleSwitchs.tempMode;

export default toggleSwitchsSlice.reducer;
