import Axios from './axios/axiosClass';
import { IAxiosClass, IAxiosResponse } from './axios/Interface';
import { IFetch } from './IFetch';

export default class FetchClass implements IFetch {
  protected Fetch: IAxiosClass;

  constructor(url: string) {
    this.Fetch = new Axios(url);
  }

  public async fetch(path: string): Promise<IAxiosResponse> {
    return await this.Fetch.get(`${path}`);
  }

  public async viacep(cep: string): Promise<IAxiosResponse> {
    return await this.Fetch.get(`${cep}/json/`);
  }
}
