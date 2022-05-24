import { AxiosResponse } from 'axios';

export interface IAxiosClass {
  get(url: string): Promise<AxiosResponse>;
  post(url: string, data: AxiosResponse): Promise<AxiosResponse>;
}
export type IAxiosResponse = AxiosResponse;
