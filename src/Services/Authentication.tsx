import { useState } from "react";
import { AbraPostApi } from "./AbraApi";
import { useAppDispatch } from "../Redux/hooks";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
// Types
import { LoginProps } from "../Pages/Login/types";
import { logOut, setUser, UserProps } from "../Redux/User/User";
import { PayloadAuthCheckProps } from "../App";

// Login hook
export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const [authError, setAuthError] = useState<string | undefined>(undefined);


  // -----Login Mutation-----
  const loginMutation: UseMutationResult<UserProps, Error, LoginProps> = useMutation<
    UserProps,
    Error,
    LoginProps
  >({
    mutationFn: (payload: LoginProps): Promise<UserProps> => {
      setAuthError(undefined);
      return AbraPostApi("/auth/login/" ,payload);
    },
    // Success
    onSuccess: (response) => {
      console.log(response)
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
       return AbraPostApi("/auth/verify-token/", payload)
     },
     onError: (err) => {
      dispatch(logOut());
     }
   },
   );

  // ----- Check if user auth -----
  const checkUserAuth = async (
    payload: PayloadAuthCheckProps
  ) => {
    checkAuthMutation.mutate(payload)
  };

  return { fetchLogin, authError, checkUserAuth, loginMutation } as const;
};
