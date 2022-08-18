import { useState } from "react";
import { PostFetchApi } from "./FetchApi";
// Types
import { LoginProps } from "../Pages/Login/types";
import { useAppDispatch } from "../Redux/hooks";
import { setUser } from "../Redux/User/User";

// Login hook
export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const [authError, setAuthError] = useState<string | undefined>(undefined);

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

  return [fetchLogin, authError] as const;
};
