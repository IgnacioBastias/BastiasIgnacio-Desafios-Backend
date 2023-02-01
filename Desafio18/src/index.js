import Server from './services/server.js';
import Config from './config/index.js';
import { initDb } from './db/db.js';
import {logger} from './helpers/logs.js'


Server.listen(Config.PUERTO, async () => {

    await initDb();
    logger.info('Conectado a la DB!');
    logger.info('Server escuchando en el puerto', Config.PUERTO);
}); 