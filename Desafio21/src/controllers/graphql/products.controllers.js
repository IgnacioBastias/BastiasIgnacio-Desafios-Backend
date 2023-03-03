import { saveProduct, getAllProducts } from "../../services/rest/products.services.js";

export const saveController = async ({ data }) => {

    const NewProd = {...data}
    const product = await saveProduct(NewProd);
    return product;
}

export const getAllController = async () => {

    const products = await getAllProducts();
    return products;
}