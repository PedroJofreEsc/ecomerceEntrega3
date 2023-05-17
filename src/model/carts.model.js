import mongoose from 'mongoose'
import { modelsName } from './index.js'


const cartsSchema = new mongoose.Schema({

    products: {
        type:
            [{
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products",
                },
                quantity: {
                    type: Number,
                    default: 0,
                }
            }]
        ,
        default: [],
    },
})

const cartsModel = mongoose.model(modelsName.carts, cartsSchema)

export default cartsModel