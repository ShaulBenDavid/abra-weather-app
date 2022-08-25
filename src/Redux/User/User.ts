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
  readonly logoutProccess: boolean;
};
// State
const initialState: UserStateProps = {
  user: null,
  logoutProccess: false,
};

// reducer
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // New user
    setUser: (state, action) => {
      state.user = action.payload.data;
    },
    // Logout
    logOut: (state) => {
      state.user = null;
      state.logoutProccess = false;
    },
    // Logout start depends on screen size
    manegeLogout: (state) => {
      state.logoutProccess = !state.logoutProccess;
    }
  },
});

export const { setUser, logOut, manegeLogout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export const selectLogoutProccess = (state: RootState) => state.user.logoutProccess;

export default userSlice.reducer;
