import{ Router } from'express';
import {productosRandom, normalizar, denormalizar} from '../controller/controller.js'

const router = Router();

router.get('/productos-test', (req, res) => {

    let productos = productosRandom()

    res.json({
        msg: productos
    })
});

router.get('/normalizado', (req, res) => {

    let msgNormalizados = normalizar();

    res.json({
        msg: msgNormalizados
    })
});

router.get('/denormalizado', (req, res) => {

    let msgDenormalizados = denormalizar();

    res.json({
        msg: msgDenormalizados
    })
});


export default router;