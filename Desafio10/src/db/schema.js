import mongoose from 'mongoose';

const productsCollection = 'productos';
const cartCollection = 'carts';

const ProductsSchema = new mongoose.Schema(
    {
        title: { type: String, require: true, max: 100 },
        price: { type: Number, require: true, max: 1000 },
        codigo: { type: String, require: true, max: 100 },
        stock: { type: Number, required: true },
        descripcion: { type: String, require: true, max: 100 },
        img: { type: String, require: true, max: 100 },
    },
    { timestamps: true }
);

const CartSchema = new mongoose.Schema(
    { productos: {type: Array} },
    { timestamps: true }
);


const ProductsModel = mongoose.model(productsCollection, ProductsSchema);
const CartModel = mongoose.model(cartCollection, CartSchema);

export { ProductsModel, CartModel};