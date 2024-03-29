import mongoose from 'mongoose';
import config from '../../../config/index.js';


mongoose.set('strictQuery', false);

export default class DaoMongoDB {
    constructor(collection, schema){
        this.collection = mongoose.model(collection, schema);
        this.initDB = mongoose.connect(config.MONGO_ATLAS_URL, () => console.log("Conectado a mongoDB"));
    }

    async initMongoDB() {
        return this.initDB;
    }

    async save(doc) {
        try {
            const document = await this.collection.create(doc);
            return document;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const docs = await this.collection.find({});
            return docs;
        } catch (error) {
            console.log(error);
        }
    }
}