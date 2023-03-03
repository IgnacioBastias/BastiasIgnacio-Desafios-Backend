import { productsModel } from '../../persistence/daos/dao-mongodb/schema/products.schema.js'
import mongoose from 'mongoose';
import app from '../../index.js';
import request from 'supertest';
import chai from 'chai';
var expect = chai.expect;

describe('Tests server products', () => {
    beforeEach(async () => {
        await mongoose.connection.collections['products'].drop();
    });

    it('add product', async () => {
        const doc = {
            name: 'BuzoTest',
            price: '180',
            stock: '5'
        };
        const response = await request(app)
            .post('/api/add')
            .send(doc)  
        expect(response.statusCode).to.equal(200)
        expect(response.body.name).to.equal(doc.name)
        expect(response.body.price).to.equal(doc.price)
    });

    it('get all products', async () => {
        const doc = {
            name: 'BuzoTest',
            price: '180',
            stock: '5'
        }

        await productsModel.create(doc);
        const response = await request(app)
            .get('/api/list')
        expect(response.statusCode).to.equal(200)
        expect(response.body).to.have.lengthOf(1)
        expect(response.body[0].name).to.equal(doc.name)
    })
});