import mongoose from 'mongoose'
import { modelsName } from './index.js'

const productsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    thumbail: {
        type: Array,
        default: []
    },
    code: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }
})

const productsModel = mongoose.model(modelsName.products, productsSchema)

export default productsModel 