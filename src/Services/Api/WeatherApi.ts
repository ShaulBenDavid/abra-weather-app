import axios from "axios";
import { WEATHER_BASE_URL } from "../../Utils/Constants";

const api = axios.create({
  baseURL: WEATHER_BASE_URL,
});

// Get
export function weatherFetchApi<T extends string, P>(url: T, token: P): Promise<any>;

export function weatherFetchApi<T extends string>(url: T, token: void): Promise<any>;


export async function weatherFetchApi<T extends string, P>(url: T, params: P) {
  const response = await api.get(`${url}?apikey=xolzN1JUj3XPR9t9qxzfa4IJb8CNGs59&details=true`, { params });
  return response;
}

// KKv26VA4AOQ3mn6FW1hpdRztJPAjfZ7o 
// city: 'México City', country: 'Mexico', value: '242560'