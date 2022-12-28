import Server from './services/server.js';
import { initDb } from './db/db.js';
import minimist from 'minimist';

const optionalArgsObject = {
  default: {
    port: '8080'
  }
};

const args = minimist(process.argv.slice(2), optionalArgsObject);


Server.listen(args.port, async () => {

    await initDb();
    console.log('Conectado a la DB!');
    console.log('Server escuchando en el puerto', args.port);
}); 