import mongoose from "mongoose";

const conectionString = 'mongodb+srv://IgnacioBastis:bot7JS8kJ2Ts04Ao@cluster0.3ntoz7i.mongodb.net/coderhouse?retryWrites=true&w=majority'

const initMongoDB = async () => {
    try {
        console.log('CONECTANDO A DB...');

        await mongoose.connect(conectionString);

        console.log('!!CONECTADO¡¡');
    } catch (error) {
        console.log(`Error ${error}`)
    }
};

export default initMongoDB;