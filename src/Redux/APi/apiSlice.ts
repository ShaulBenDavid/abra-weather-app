import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logOut } from '../User/User.redux';

import { BASE_URL } from '../../Utils/Constants';
import { RootState } from '../store';
// Base api
const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).user.user?.access_token;

        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers;
    }
})
// Api wrapper for auth check
const baseQueryWithAuthCheck: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    console.log(result)
    if (result?.error?.status === 401) {
        api.dispatch(logOut());
    }

    return result;
}

// Api
export const apiSlice = createApi({
    baseQuery: baseQueryWithAuthCheck,
    endpoints: builder => ({})
})
