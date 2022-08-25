import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../Utils/Constants";

const api = axios.create({
  baseURL: BASE_URL,
});

export type UrlWithPayload<T, P> = {
  url: T;
  payload: P;
}

export const abraCreateInterceptor = (
  onSuccess: (response: AxiosResponse) => Promise<AxiosResponse> | AxiosResponse,
  onError: (error: any) => any
): number => {
  return api.interceptors.response.use(onSuccess, onError);
}

export const abraEjectInterceptor = (interceptorId: number) => {
  return api.interceptors.response.eject(interceptorId);
}

// ----- Post ------
export function AbraPostApi<T extends string, P>(url: T, payload: P): Promise<any>;


export async function AbraPostApi<T extends string, P>(url: T, payload: P) {
  console.log(payload)
  const response = await api.post(url, payload);
  return response;
}
// -------- Get -------
export function AbraGetApi<T extends string, P>(url: T, token: P): Promise<any>;


export async function AbraGetApi<T extends string, P>(url: T, token: P) {
  console.log(token)
  const bearerToken = `Bearer ${token}`;
  const response = await api.get(url, { 'headers': { 'Authorization': bearerToken } });
  return response;
}