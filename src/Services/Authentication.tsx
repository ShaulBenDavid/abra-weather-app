import { useState } from "react";
import { PostFetchApi } from "./FetchApi";
// Types
import { LoginProps } from "../Pages/Login/types";
import { useAppDispatch } from "../Redux/hooks";
import { setUser } from "../Redux/User/User";

// Login hook
export const useAuthentication = () => {
    const dispatch = useAppDispatch()
    const [authError, setAuthError] = useState<string | undefined>(undefined);

    const fetchLogin: any =  async (payload: LoginProps): Promise<any> => {
        try {
            setAuthError(undefined);
            const response = await PostFetchApi("/auth/login/", payload);
            dispatch(setUser(response));
        } catch (err: any) {
            console.log(err);
            let newErr = err.response.data.non_field_errors[0];
            console.log(newErr);
            setAuthError(newErr);
        }
    }

    return [fetchLogin, authError];
}