import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Types
export type UserParams = {
  api_key: string;
  email: string;
  first_name: string;
  id: string;
  last_name: string;
};
export type UserProps = {
  access_token: string;
  refresh_token: string;
  token: string;
  user: UserParams;
};
export type UserStateProps = {
  readonly user: UserProps | null;
};

// State
const initialState: UserStateProps = {
  user: null,
};

// reducer
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // New user
    setUser: (state, action) => {
      console.log(action)
      state.user = action.payload.data;
    },
    // Logout
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
