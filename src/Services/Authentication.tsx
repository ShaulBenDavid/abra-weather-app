import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

import { FirebasePopupProps, signInWithGooglePopup } from "./Firebase";
import { AbraPostApi } from "./Api/AbraApi";
import {
  logOut,
  selectUser,
  setUser,
  UserProps,
} from "../Redux/User/User.redux";
// Types
import {
  GOOGLE_LOGIN_END_POINT_URL,
  LOGIN_END_POINT_URL,
  VERIFY_AUTH_END_POINT_URL,
} from "../Utils/Constants";
import { LoginProps } from "../Pages/Login/types";
import { PayloadAuthCheckProps } from "../App";

// Parse error
const parseError = (err: any): string => {
  let newErr: string = "";
  let resError = err.response.data;
  for (let idx in resError) {
    newErr += resError[idx] + " ";
  }
  return newErr;
};

// Login hook
export const useAuthentication = () => {
  const dispatch = useAppDispatch();
  const [authError, setAuthError] = useState<string | undefined>(undefined);
  const currentUser = useAppSelector(selectUser);

  // ---=== Mutations ===---
  // ======================================================
  // ----- Login Mutation -----
  const loginMutation: UseMutationResult<UserProps, Error, LoginProps> =
    useMutation<UserProps, Error, LoginProps>({
      mutationFn: (payload: LoginProps): Promise<UserProps> => {
        setAuthError(undefined);
        return AbraPostApi(LOGIN_END_POINT_URL, payload);
      },
      // Success
      onSuccess: (response) => {
        dispatch(setUser(response));
      },
      // Failed
      onError: (err: any) => {
        const newErr = parseError(err);
        setAuthError(newErr);
      },
    });
  // ======================================================
  // --- Login with google ---
  const googleLoginMutation: UseMutationResult<
    LoginProps,
    Error,
    FirebasePopupProps
  > = useMutation<LoginProps, Error, FirebasePopupProps>({
    mutationFn: (payload: FirebasePopupProps): Promise<LoginProps> => {
      setAuthError(undefined);
      return AbraPostApi(GOOGLE_LOGIN_END_POINT_URL, payload);
    },
    onSuccess: (response) => dispatch(setUser(response)),
    // Failed
    onError: (err: any) => {
      const newErr = parseError(err);
      setAuthError(newErr);
    },
  });
  // ======================================================
  // --------- Check Auth Mutation ---------
  const checkAuthMutation: UseMutationResult<
    string,
    Error,
    PayloadAuthCheckProps
  > = useMutation<string, Error, PayloadAuthCheckProps>({
    mutationFn: (payload: PayloadAuthCheckProps) => {
      return AbraPostApi(VERIFY_AUTH_END_POINT_URL, payload);
    },
    onError: () => {
      dispatch(logOut());
    },
  });

  // ---=== Actions ===---
  // ---------- New Login --------------
  const fetchLogin = async (payload: LoginProps) => {
    loginMutation.mutate(payload);
  };

  // --- Login with google popup ---
  const loginWithGoogle = async () => {
    const payload = await signInWithGooglePopup();
    payload?.code && googleLoginMutation.mutate(payload);
  };

  // ----- Check if user auth -----
  const checkUserAuth = async () => {
    const payload = {
      token: currentUser?.access_token,
    };
    currentUser && checkAuthMutation.mutate(payload);
  };

  return {
    fetchLogin,
    authError,
    checkUserAuth,
    loginMutation,
    loginWithGoogle,
    googleLoginMutation,
  } as const;
};
