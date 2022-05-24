import HttpError from '../../../infra/http/errors/HttpError';
import { IFetch } from '../../../shared/fetch/IFetch';

export default class ViacepService {
  private fetch: IFetch;

  constructor(FetchClass: IFetch) {
    this.fetch = FetchClass;
  }

  public async getCep(cep: string) {
    cep.replace('-', '');
    cep.replace(/\D/g, '');
    cep.replace(/[^a-zA-Z]/g, '');
    if (cep.length === 8) {
      const response = await this.fetch.viacep(`${cep}`);
      return response.data;
    }

    throw new HttpError('CEP invalid', 400);
  }
}
