import { AxiosHeaders, Method, RawAxiosRequestHeaders } from 'axios';
import axiosInstance from './axiosInstance';

type MethodsHeaders = Partial<
  {
    [Key in Method as Lowercase<Key>]: AxiosHeaders;
  } & { common: AxiosHeaders }
>;

export const getRequest = (data: {
  url: string;
  params?: any;
  headers?: (RawAxiosRequestHeaders & MethodsHeaders) | AxiosHeaders;
}) => {
  const { url, params, headers } = data;
  return axiosInstance.get(url, {
    params,
    headers,
  });
};
