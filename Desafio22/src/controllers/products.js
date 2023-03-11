import { productsModel } from '../models/products.js';

export const getAll = async (ctx, next) => {

  try {
    ctx.body = {
      status: 'success',
      data: await productsModel.find({}),
    };
    ctx.status = 200;
  } catch (error) {
    ctx.throw(400, 'error_getAll');
  }
}

export const save = async (ctx, next) => {

  try {

    console.log(ctx.request.body);

    const data = ctx.request.body;
    const result = await productsModel.create(data)

    ctx.body = {
      status: 'success',
      data: result,
    };
    ctx.status = 200;

  } catch (error) {
    ctx.throw(400, 'error_save');
  }

}

export const getById = async (ctx, next) => {

  try {
    const { id } = ctx.params;
    ctx.body = {
      status: 'success',
      data: await productsModel.findById(id),
    };
    ctx.status = 200;

  } catch (error) {
    ctx.throw(400, 'error_getById');
  }

}

export const update = async (ctx, next) => {

  try {

    const { id } = ctx.params;
    const data = ctx.request.body;

    await productsModel.findByIdAndUpdate(id, data)

    ctx.body = {
      status: 'success',
      data: data,
    };
    ctx.status = 200;

  } catch (error) {
    ctx.throw(400, 'error_update');
  }

}

export const deleteProduct = async (ctx, next) => {

  try {
    const { id } = ctx.params;
    await productsModel.findByIdAndDelete(id)

    ctx.status = 200;
    ctx.body = {
      status: 'success',
      message: `Product with id: ${id} deleted`,
    };
  } catch (error) {
    ctx.throw(400, 'error_delete');
  }

};