import Fetch from './mock/fetchClass';
import ViacepService from '../../modules/viacep/services/ViacepService';

describe('getCep service', () => {
  it('should return cep data', () => {
    const viacepService = new ViacepService(new Fetch('mockUrl'));

    expect(viacepService.getCep('12345678')).toBe('Cep inválido');
  });
});
