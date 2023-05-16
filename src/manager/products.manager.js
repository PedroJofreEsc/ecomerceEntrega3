import productsModel from "../model/products.model.js";

export class ProductsManager {
    constructor() { }

    static getAll = async () => {
        const result = await productsModel.find().lean()
        return result
    }

    static create = async (data) => {
        const result = await productsModel.create(data)
        return result
    }

    static getProductById = async (id) => {
        const result = await productsModel.findOne({ _id: id })
        return result
    }

    static updateProduct = async (id, data) => {

        const result = await productsModel.findOneAndUpdate({ _id: id }, data)
        return await this.getProductById(id)
    }

    static delete = async (id) => {
        const result = await productsModel.deleteOne({ _id: id })
        return result

    }
}