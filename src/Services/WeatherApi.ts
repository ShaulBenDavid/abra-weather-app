import axios from "axios";
import { WEATHER_BASE_URL } from "../Utils/Constants";

const api = axios.create({
  baseURL: WEATHER_BASE_URL,
});

// Get
export function weatherFetchApi<T extends string, P>(url: T, token: P): Promise<any>;

export function weatherFetchApi<T extends string>(url: T, token: void): Promise<any>;


export async function weatherFetchApi<T extends string, P>(url: T, params: P) {
  const response = await api.get(`${url}?apikey=LjMJaCzdKF0kAvFrg27eUzGDx7PGv3P1`, { params });
  return response;
}