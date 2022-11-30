import{ Router } from'express';
import productosRouter from'./productos.js';
import cartRouter from'./cart.js';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'ok router'
    })
});

router.use('/productos', productosRouter);
router.use('/carrito', cartRouter);

export default router;