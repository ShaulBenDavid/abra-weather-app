import { useState } from "react";
import { AbraPostApi } from "./Api/AbraApi";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { logOut, selectUser, setUser, UserProps } from "../Redux/User/User";
import { LOGIN_END_POINT_URL, VERIFY_AUTH_END_POINT_URL } from "../Utils/Constants";
// Types
import { LoginProps } from "../Pages/Login/types";
import { PayloadAuthCheckProps } from "../App";

// Login hook
export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const currentUser = useAppSelector(selectUser);


  // -----Login Mutation-----
  const loginMutation: UseMutationResult<UserProps, Error, LoginProps> = useMutation<
    UserProps,
    Error,
    LoginProps
  >({
    mutationFn: (payload: LoginProps): Promise<UserProps> => {
      setAuthError(undefined);
      return AbraPostApi(LOGIN_END_POINT_URL ,payload);
    },
    // Success
    onSuccess: (response) => {
      dispatch(setUser(response));
    },
    // Failed
    onError: (err: any) => {
      let newErr: string = "";
      let resError = err.response.data;
      for (let idx in resError) {
        newErr += resError[idx] + " ";
      }
      setAuthError(newErr);
    }
  });

  // ---------- New Login --------------
  const fetchLogin = async (payload: LoginProps) => {
    loginMutation.mutate(payload);
  };

  // ======================================================

   // --------- Check Auth Mutation ---------
   const checkAuthMutation: UseMutationResult<string, Error, PayloadAuthCheckProps> =
   useMutation<string, Error, PayloadAuthCheckProps>({
     mutationFn: (payload: PayloadAuthCheckProps) =>{
       return AbraPostApi(VERIFY_AUTH_END_POINT_URL, payload)
     },
     onError: (err) => {
      dispatch(logOut());
     }
   },
   );

  // ----- Check if user auth -----
  const checkUserAuth = async () => {
    const payload = {
      token: currentUser?.access_token,
    };
    checkAuthMutation.mutate(payload)
  };

  return { fetchLogin, authError, checkUserAuth, loginMutation } as const;
};
