import { useEffect, useState } from "react";
import { PostFetchApi } from "./FetchApi";
// Types
import { LoginProps } from "../Pages/Login/types";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { selectUser, setUser } from "../Redux/User/User";
import { PayloadAuthCheckProps } from "../App";

// Login hook
export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectUser);
  const [authError, setAuthError] = useState<string | undefined>(undefined);

  // ---- Login -----
  const fetchLogin = async (payload: LoginProps): Promise<any> => {
    try {
      setAuthError(undefined);
      const { data } = await PostFetchApi("/auth/login/", payload);
      dispatch(setUser(data));
    } catch (err: any) {
      let newErr: string = "";
      let resError = err.response.data;
      for (let idx in resError) {
        newErr += resError[idx] + " ";
      }
      setAuthError(newErr);
    }
  };

  // ----- Check if user auth -----
  const checkUserAuth = async (
    payload: PayloadAuthCheckProps
  ): Promise<any> => {
    if (currentUser) {
      try {
        const d = await PostFetchApi("/auth/verify-token/", payload);
        console.log(d);
      } catch (err: any) {
        dispatch(setUser(null));
        console.log(err);
      }
    }
    return;
  };

  return { fetchLogin, authError, checkUserAuth } as const;
};
