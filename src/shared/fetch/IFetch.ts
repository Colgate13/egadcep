import { IAxiosResponse } from './axios/Interface';

/**
 * @interface IFetch
 * @desc send te request to the server and return the response
 * */

export interface IFetch {
  fetch(path: string): Promise<IAxiosResponse>
  viacep(cep: string): Promise<IAxiosResponse>
}
