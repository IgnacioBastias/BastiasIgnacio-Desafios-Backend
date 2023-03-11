import mongoose from 'mongoose';
import config from '../config/index.js';

export const initMongoDB = async () => {
    try {
      await mongoose.connect(config.MONGO_ATLAS_URL);
      console.log('Conectado a Mongo Atlas');
    } catch (error) {
      console.log(error);
    }
};