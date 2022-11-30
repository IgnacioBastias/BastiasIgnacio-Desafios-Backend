import { Router } from'express';
import ProductosController from'../controller/productos.js';

const router = Router();

const admin = true;

const validateAdmin = (req, res, next) => {

    if(!admin){
        return res.status(401).json({
            msg:"no estas autorizado capo"
        })
    }

    next();
}

router.get('/', async (req, res) => {

    const productos = await ProductosController.getAll();
    
    res.json({
        msg: productos
    })
});

router.get('/:id', async (req, res) => {

    const id = req.params.id;

    const producto = await ProductosController.getById(id);

    res.json({
        msg: producto
    })

});

router.post('/', validateAdmin, (req, res) => {

    const { body } = req;
    ProductosController.save(body);

    res.json({
        msg: body
    })
});

router.put('/:id', validateAdmin, async (req, res) => {

    const id = req.params.id;
    const { body } = req;
    const data = await ProductosController.update(id, body);
    res.json({
        msg: data
    })
});

router.delete('/:id', validateAdmin, async (req, res) => {

    const id = req.params.id;
    await ProductosController.deleteById(id);

    res.json({
        msg: 'Producto eliminado'
    })
});

export default router;