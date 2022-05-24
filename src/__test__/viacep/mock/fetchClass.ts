/* eslint-disable @typescript-eslint/no-unused-vars */
import { IAxiosClass, IAxiosResponse } from '../../../shared/fetch/axios/Interface';
import { IFetch } from '../../../shared/fetch/IFetch';

export default class FetchClass implements IFetch {
  protected Fetch: IAxiosClass;

  constructor(url: string) {
    this.Fetch = {
      get: (path: string): Promise<IAxiosResponse> => new Promise((resolve) => {
        resolve({
          data: {
            cep: '77410-100',
            logradouro: 'Avenida Bahia',
            complemento: '',
            bairro: 'Setor Central',
            localidade: 'Gurupi',
            uf: 'TO',
            ibge: '1709500',
            gia: '',
            ddd: '63',
            siafi: '9385',
          },
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        });
      }),
      post: (path: string): Promise<IAxiosResponse> => new Promise((resolve) => {
        resolve({
          data: {
            cep: '77410-100',
            logradouro: 'Avenida Bahia',
            complemento: '',
            bairro: 'Setor Central',
            localidade: 'Gurupi',
            uf: 'TO',
            ibge: '1709500',
            gia: '',
            ddd: '63',
            siafi: '9385',
          },
          status: 200,
          statusText: 'OK',
          headers: {},
          config: {},
        });
      }),
    };
  }

  public async fetch(path: string): Promise<IAxiosResponse> {
    return await this.Fetch.get(`${path}`);
  }

  public async viacep(cep: string): Promise<IAxiosResponse> {
    return await this.Fetch.get(`${cep}/json/`);
  }
}
