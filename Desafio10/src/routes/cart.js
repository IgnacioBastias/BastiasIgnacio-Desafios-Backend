import { Router } from'express';
import  CartController from'../controller/cart.js';

const router = Router();

router.post('/', async (req, res) => {

    const cartId = await CartController.createCart();

    res.json({
        msg: cartId
    })
});

router.delete('/:id', async (req, res) => {

    const id = req.params.id;
    
    await CartController.deleteCart(id);

    res.json({
        msg: `Cart eliminado`
    })
});

router.get('/:id/productos', async (req, res) => {

    const id = req.params.id;

    res.json({
        msg: await CartController.getCartById(id)
    });

});

router.post('/:id/productos', async (req, res) => {

    const id = req.params.id;
    const { body } = req;
    
    await CartController.agregarProducto(id, body);

    res.json({
        msg: `Agregue un producto al carrito`
    });

});

router.delete('/:id/productos/:id_prod', (req, res) => {

    // Elimino un producto con ID de carrito y de producto
    const idCart = req.params.id;
    const idProduct = req.params.id_prod;

    CartController.deleteProduct(idCart, idProduct);

    res.json({
        msg: `Elimine el producto con ID ${idProduct}`
    })
});


export default router;