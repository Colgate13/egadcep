import { Response, Request } from 'express';
import NodeCache from 'node-cache';
import ViacepService from '../../../services/ViacepService';
import HttpError from '../../../../../infra/http/errors/HttpError';
import Fetch from '../../../../../shared/fetch/fetch';
import { CACHE_LIMIT } from '../../../../../shared/config/cache';

const cache = new NodeCache({ stdTTL: CACHE_LIMIT });

class viacepController {
  public async cepDatas(
    request: Request,
    response: Response,
  ): Promise<unknown> {
    const cep = request.body?.cep || new HttpError('CEP is missing', 400);

    if (cache.has(`${cep}`)) {
      return response.json({
        ...cache.get(`${cep}`),
        cache: true,
      });
    }
    const viacepService = new ViacepService(new Fetch('https://viacep.com.br/ws/'));

    const result = await viacepService.getCep(`${cep}`) || new HttpError('An error occurred, please try later', 500);

    cache.set(`${cep}`, result, CACHE_LIMIT);

    return response.json({
      ...result,
      cache: false,
    });
  }
}

export default viacepController;
