import { LOGIN_END_POINT_URL } from "../../Utils/Constants";
import { apiSlice } from "../APi/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: payload => ({
                url: LOGIN_END_POINT_URL,
                method: 'POST',
                body: {...payload}
            })
        }),
    })
})