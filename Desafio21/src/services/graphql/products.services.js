import { buildSchema } from "graphql";
import { saveController, getAllController } from "../../controllers/graphql/products.controllers.js";

export const graphqlSchema = buildSchema(`
    input InputProduct{
        name: String!
        price: String!
        stock: String!
    }    
    type Product{
        name: String
        price: String
        stock: String
    }
    type Query{
        getAllController:[Product]
    }
    type Mutation{
        saveController(data: InputProduct):Product
    }
`)

export const graphqlRoot = {
    saveController,
    getAllController
}