import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Types
type ThemeModeProps = {
  readonly theme: string;
}
// State
const initialState: ThemeModeProps = {
  theme: "light",
};

export const themeModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});

export const { toggleMode } = themeModeSlice.actions;

// Selector
export const selectTheme = (state: RootState) => state.theme.theme;

export default themeModeSlice.reducer;
