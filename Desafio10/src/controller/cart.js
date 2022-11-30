import initMongoDB from '../db/conexion.js'
import { CartModel } from '../db/schema.js'
import { v4 as uuidv4 } from 'uuid';

class CartApi {
    
    createCart = async () => {

        const nuevoCart = {
            productos: []
        };
        try {
            await CartModel.create(nuevoCart)
            return nuevoCart;
        } catch (error) {
            console.log("Error al crear carrito",error)
        }
    };

    deleteCart = async (id) => {


        try {
            await CartModel.findByIdAndDelete(id)
        } catch (error) {
            console.log("Error al eliminar carrito",error)
        }
    }

    getCartById = async (id) => {

        try {
            const cart = await CartModel.findOne({ id: id });
            return cart;
        } catch (error) {
            console.log("Error al traer carrito por id",error)
        }
    }

    agregarProducto = async (id, data) => {
        
        const nuevoProducto =
        {
            $push: {
                productos: {
                    id: uuidv4(),
                    title: data.title,
                    price: data.price,
                    cantidad: data.cantidad,
                }
            }
        };

        try {
            await CartModel.findByIdAndUpdate(id, nuevoProducto);
        } catch (error) {
            console.log("Error al agregar producto al carrito",error)
        }
    }

    deleteProduct = async (idCart, idProduct) => {


        try {
            const cart = await CartModel.findOne({ id: idCart });

            const indiceProducto = cart.productos.findIndex(prodId => prodId.id === idProduct);
    
            cart.productos.splice(indiceProducto, 1);
    
            await CartModel.findByIdAndUpdate(idCart, cart);
        } catch (error) {
            console.log("Error al eliminar producto de carrito",error)
        }
    }
};

const CartController = new CartApi();

export default CartController;
