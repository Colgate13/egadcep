import {
  Router, Response,
} from 'express';
import 'express-async-errors';

import docs from './docs/index.routes';
import Viacep from './viacep.routes';

export const routesCreator = Router();

const routes = Router();

routes.use('/docs', docs);
routes.use('/cep', Viacep);

routes.use('/', (response: Response) => {
  response.send({
    message: 'Welcome',
    status: 'ONLINE',
    version: '1.0.0',
    documentation: '/docs',
  });
});

export default routes;
