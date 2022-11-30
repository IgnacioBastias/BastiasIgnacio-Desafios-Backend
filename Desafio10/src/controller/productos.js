import initMongoDB from '../db/conexion.js'
import { ProductsModel } from '../db/schema.js'

import { v4 as uuidv4 } from 'uuid';

class ProductosApi {

    crearProducto = async (newProducto) => {
        try {
            await ProductsModel.create(newProducto)
        } catch (error) {
            console.log("Error al crear producto",error)
        }
    }

    getAll = async () => {

        try {
            const productos = await ProductsModel.find();
            return productos;
        } catch (error) {
            console.log("Error al traer productos",error)
        }
    }

    getById = async (id) => {

        try {
            const producto = await ProductsModel.findOne({ id: id });
            return producto;
        } catch (error) {
            console.log("Error al traer prod por id",error)
        }
    }

    save = async (data) => {

        const nuevoProducto = {
            title: data.title,
            price: data.price,
            codigo: uuidv4(),
            stock: data.stock,
            descripcion: data.descripcion,
            img: data.url
        }

        try {
            this.crearProducto(nuevoProducto);
            return nuevoProducto.id;
        } catch (error) {
            console.log("Error al guardar",error)
        }
    }

    update = async (id, dataNueva) => {

        const nuevoProducto = {
            title: dataNueva.title,
            price: dataNueva.price,
            stock: dataNueva.stock,
            descripcion: dataNueva.descripcion,
        }

        try {
            await ProductsModel.findByIdAndUpdate(id, nuevoProducto);
            return nuevoProducto;
        } catch (error) {
            console.log("Error al actualizar", error)
        }
    }

    deleteById = async (id) => {

        try {
            await ProductsModel.findByIdAndDelete(id)
        } catch (error) {
            console.log("Error al eliminar",error)
        }
    }

};

const ProductosController = new ProductosApi();

export default ProductosController;
