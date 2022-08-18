import axios from "axios";
import { BASE_URL } from "../Utils/Constants";

const api = axios.create({
  baseURL: BASE_URL,
//   validateStatus: function (status) {
//     return status === 200;
// }
});

export type UrlWithPayload<T, P> = {
  url: T;
  payload: P;
}

export function PostFetchApi<T extends string, P>(url: T, payload: P): Promise<any>;


export async function PostFetchApi<T extends string, P>(url: T, payload: P) {
  console.log(payload)
  const response = await api.post(url, payload);
  return response;
  // return await api.post(url, payload).then(({ data }) => data).catch(function (error) {
  //   throw new Error(error);
  // });
}