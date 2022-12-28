import { Router } from 'express';
import { productosRandom, normalizar, denormalizar } from '../controller/normalizr.js'
import { signUp, logIn, getHome, logOut } from '../controller/logIn.js'
import passport from 'passport';
import { isLoggedIn } from '../middlewares/userAutenticated.js';

import { fork } from 'child_process';
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const scriptPath = path.resolve(__dirname, '../controller/randoms.js');

const passportOptions = { badRequestMessage: 'Error en el body' };

const router = Router();

router.get('/productos-test', productosRandom);

router.get('/normalizado', normalizar);

router.get('/denormalizado', denormalizar);

router.post('/signUp', signUp);

router.post('/logIn', passport.authenticate('logIn', passportOptions), logIn);

router.get('/home', isLoggedIn, getHome);

router.get('/logout', logOut);

router.get('/info', (req, res) => {
    res.json({
        SistemaOperativo: process.platform,
        VersionNode: process.version,
        MemoriaTotalReservada: JSON.stringify(process.memoryUsage()),
        ProcessId: process.pid,
        CarpetaProyecto: process.cwd()
    })
});

router.get('/randoms/:cant', (req, res) => {

    const cant = req.params.cant;

    const randomNumb = fork(scriptPath);

    randomNumb.send(cant);
    randomNumb.on('message', (numb) => {
        res.json({
            numb
        });
    });
})

export default router;