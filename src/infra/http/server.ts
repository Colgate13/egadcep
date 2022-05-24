import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cluster from 'cluster';
import * as http from 'http';
import routes from './routes/index';
import ProcessController from '../process/Controller';

import HttpError from './errors/HttpError';

class ServerHttp {
  protected app;

  protected server;

  constructor(port: number | string) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.start(port);
  }

  init() {
    this.app.routes;
  }

  start(port: number | string) {
    if (cluster.isPrimary) {
      ProcessController.PrimaryProcess();
    } else {
      this.routes();
      this.middleware();
      this.server.listen(port, () => {
        console.log(`Server started on port ${port}`);
      });
    }
  }

  routes() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(routes);
  }

  middleware() {
    this.app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
      if (err instanceof HttpError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }
      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  close(callback: () => void) {
    this.server.close(callback);
  }
}
export default ServerHttp;
