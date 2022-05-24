/* eslint-disable no-console */
import os from 'os';
import cluster from 'cluster';

class ProcessController {
  static PrimaryProcess() {
    if (cluster.isPrimary) {
      process.title = 'agadcep - server primary';
      console.log('> Primary process started');
      const processesCount = os.cpus().length;
      console.log(`> Server Primary running in process - ${process.pid}`);
      console.log(`> Server Forking process, creating a Worker process - ${processesCount}\n`);

      for (let index = 0; index < processesCount; index++) { cluster.fork(); }

      cluster.on('exit', async (worker, code) => {
        if (code !== 0 && !worker.exitedAfterDisconnect) {
          console.log(`> Server Worker [PID = ${worker.process.pid}] ending/died, Forking another Worker process!`);
          cluster.fork();
        }
      });

      return true;
    }

    process.title = 'agadcep - server worker';

    return false;
  }
}

export default ProcessController;
