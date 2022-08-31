import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// https://github.com/Trim21/axios-userscript-adapter
import adapter from "axios-userscript-adapter";

export function get<T = any, R = AxiosResponse<T>>(
  url: string,
  config?: Exclude<Partial<AxiosRequestConfig>, "adapter">
): Promise<R> {
  return axios.get(url, {
    adapter,
    ...config,
  });
}

export function post<T = any, R = AxiosResponse<T>>(
  url: string,
  data?: any,
  config?: Exclude<Partial<AxiosRequestConfig>, "adapter">
): Promise<R> {
  return axios.post(url, data, {
    adapter,
    ...config,
  });
}
