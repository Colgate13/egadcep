import { Router } from 'express';
import ViacepController from '../../../modules/viacep/infra/http/controllers/viacepController';
import CreateToken from '../../../modules/viacep/infra/http/controllers/CreateToken';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const viacepController = new ViacepController();
const createToken = new CreateToken();
const routes = Router();

routes.post('/', ensureAuthenticated, viacepController.cepDatas);
routes.post('/create/token', createToken.create);

export default routes;
