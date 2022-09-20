import axios from "axios";
import { WEATHER_BASE_URL } from "../../Utils/Constants";

const api = axios.create({
  baseURL: WEATHER_BASE_URL,
});

// Get
export function weatherFetchApi<T extends string, P>(url: T, token: P): Promise<any>;

export function weatherFetchApi<T extends string>(url: T, token: void): Promise<any>;


export async function weatherFetchApi<T extends string, P>(url: T, params: P) {
  const response = await api.get(`${url}?apikey=${process.env.REACT_APP_WEATHER_API_KEY!}&details=true`, { params });
  return response;
}
