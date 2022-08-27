import axios from "axios";
import { BASE_URL } from "../../Utils/Constants";

const api = axios.create({
  baseURL: BASE_URL,
});

export type UrlWithPayload<T, P> = {
  url: T;
  payload: P;
}


// ----- Post ------
// Can get 2 or 3 parameters

export function AbraPostApi<T extends string, P, C>(url: T, payload: P, token: C): Promise<any>;

export function AbraPostApi<T extends string, P>(url: T, payload: P, token: void): Promise<any>;

export async function AbraPostApi<T extends string, P, C>(url: T, payload: P, token: C) {
  // If you need token
  const authToken = token && { "headers": { 'Authorization': `Bearer ${token}` } };
  const response = await api.post(url, payload, authToken);
  return response;
}

// -------- Get -------
export function AbraGetApi<T extends string, P>(url: T, token: P): Promise<any>;


export async function AbraGetApi<T extends string, P>(url: T, token: P) {
  const bearerToken = `Bearer ${token}`;
  const response = await api.get(url, { 'headers': { 'Authorization': bearerToken } });
  return response;
}