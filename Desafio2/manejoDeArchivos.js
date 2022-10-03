const fs = require('fs');
const path = require('path');

const nombreArchivo = "./productos.json";


class Contenedor {
    constructor(archivo) {

        this.archivo = archivo;

    }

    save = async (nuevoProducto) => {

        if (nuevoProducto === undefined) throw new Error('Producto invalido')

        const dato = await fs.promises.readFile(nombreArchivo, `utf-8`);
        const productos = JSON.parse(dato);

        const producto = {
            title: nuevoProducto.title,
            price: nuevoProducto.price,
            id: productos[productos.length - 1].id + 1,
        }

        productos.push(producto);

        await fs.promises.writeFile(nombreArchivo, JSON.stringify(productos, null, '\t'));
    }

    getById = async (id) => {

        const dato = await fs.promises.readFile(nombreArchivo, `utf-8`);
        const productos = JSON.parse(dato);

        const indice = productos.findIndex((producto) => producto.id === id);
        if (indice < 0) {
            throw new Error('No existe')
        }

        return (productos[indice]);
    }

    getAll = async () => {

        const dato = await fs.promises.readFile(nombreArchivo, `utf-8`);
        const productos = JSON.parse(dato);

        return productos;

    }

    deleteById = async (id) => {

        const dato = await fs.promises.readFile(nombreArchivo, `utf-8`);
        const productos = JSON.parse(dato);

        const indice = productos.findIndex((producto) => producto.id === id);

        productos.splice(indice, 1);

        await fs.promises.writeFile(nombreArchivo, JSON.stringify(productos, null, '\t'));

    }

    deleteAll = async () => {

        await fs.promises.writeFile(nombreArchivo, JSON.stringify([], null, '\t'));

    }


};

const contenedor1 = new Contenedor(nombreArchivo);

// LLAMO TODOS LOS PRODUCTOS
// contenedor1.getAll().then((data) => {
//     console.log(data)
// });


// LLAMO PRODUCTO POR ID
// contenedor1.getById(2).then((data) => {
//     console.log(data)
// });


// AGREGO UN NUEVO PRODUCTO
// contenedor1.save({
//     title: "Xiaomi Redmi",
//     price: 12000,
// });


// BORRO TODOS LOS PRODUCTOS
// contenedor1.deleteAll()


// BORRO PRODUCTO POR ID
// contenedor1.deleteById(2);