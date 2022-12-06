import fs from 'fs';
import { normalize, schema, denormalize } from 'normalizr';
import { faker } from '@faker-js/faker';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mensajes = path.join(__dirname, '../data/mensajes.json');
const mensajesNormalizados = path.join(__dirname, '../data/mensajesNormalizados.json');
const mensajesDenormalizados = path.join(__dirname, '../data/mensajesDenormalizados.json');

faker.locale = 'es';

export const productosRandom = () => {
    const respuesta = [];

    for (let i = 0; i < 5; i++) {
        respuesta.push({
            nombre: faker.name.firstName(),
            precio: faker.commerce.price(),
            img: faker.image.abstract(1234, 2345),
        })
    }
    return respuesta;
};

export const leerMensajes = () => {

    const data = fs.readFileSync(mensajes, 'utf-8');
    return JSON.parse(data)

};

export const normalizar = () => {

    const data = leerMensajes();

    const user = new schema.Entity('authors', {}, { idAttribute: 'id' });
    const msg = new schema.Entity('messages', { author: user });

    const msgSchema = new schema.Array({
        author: user,
        text: [msg]
    })

    const dataNormalizada = normalize(data, msgSchema);

    fs.writeFileSync(mensajesNormalizados, JSON.stringify(dataNormalizada, null, '\t'))

    return dataNormalizada

};

export const denormalizar = () => {

    const author = new schema.Entity('authors', {});
    const text = new schema.Entity('text', { author });
    const finalSchema = new schema.Array(text)


    const data = JSON.parse(fs.readFileSync(mensajesNormalizados));
    const dataDenormalizada = denormalize(data.result, finalSchema, data.entities);

    fs.writeFileSync(mensajesDenormalizados, JSON.stringify(dataDenormalizada, null, '\t'));

    return dataDenormalizada;
};