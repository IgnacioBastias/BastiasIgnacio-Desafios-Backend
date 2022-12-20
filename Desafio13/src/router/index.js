import { Router } from 'express';
import { productosRandom, normalizar, denormalizar } from '../controller/normalizr.js'
import { signUp, logIn, getHome, logOut } from '../controller/logIn.js'
import passport from 'passport';
import { isLoggedIn } from '../middlewares/userAutenticated.js';

const passportOptions = { badRequestMessage: 'Error en el body' };

const router = Router();

router.get('/productos-test', productosRandom);

router.get('/normalizado', normalizar);

router.get('/denormalizado', denormalizar);

router.post('/signUp', signUp);

router.post('/logIn', passport.authenticate( 'logIn', passportOptions), logIn);

router.get('/home', isLoggedIn, getHome);

router.get('/logout', logOut);


export default router;