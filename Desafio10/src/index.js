import initMongoDB from '../src/db/conexion.js';
import Server from '../src/services/server.js';

const PORT = 8080;

const init = async () => {

    await initMongoDB();

    Server.listen(PORT, () => { console.log(`Servidor escuchando en el puerto ${PORT}`) });

};

init();
