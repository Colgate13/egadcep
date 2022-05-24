import Fetch from './mock/fetchClass';
import ViacepService from '../../modules/viacep/services/ViacepService';

describe('getCep service', () => {
  it('should return cep datas', async () => {
    const viacepService = new ViacepService(new Fetch('mockUrl'));
    expect(await viacepService.getCep('77410100')).toEqual({
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
    });
  });
});
