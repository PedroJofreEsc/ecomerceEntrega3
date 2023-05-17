import cartsModel from "../model/carts.model.js";

export class CartsManager {
    constructor() { }

    static getAll = async () => {
        const result = await cartsModel.find().lean()
        return result
    }

    static getById = async (id) => {
        const result = await cartsModel.findOne({ _id: id })
        return result
    }

    static create = async (data) => {
        //los carro se crean vacio
        const newCart = await cartsModel.create(data)
        return newCart
    }

    static addProducts = async (cid, pid) => {
        const cart = await cartsModel.findOne({ _id: cid })

        for (let index = 0; index < cart.products.length; index++) {

            if (cart.products[index]._id == pid) {
                cart.products[index].quantity = cart.products[index].quantity + 1;
                await cart.save();
                return cart
            };
        }
        //si no esta el producto se agrega 
        cart.products.push({ _id: pid, quantity: 1 });
        await cart.save();
        return cart
    }
}