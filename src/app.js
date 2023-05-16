import express from "express";
import { options } from "./config/option.js";
import { productsRouter } from "./routes/products.routes.js";
import mongoose from "mongoose";


const port = options.server.port
const url = options.server.url
const app = express()

app.use(express.json())
app.use("/api/products", productsRouter)
//app.use("/api/users",)
//app.use("/api/carts",)
//app.use("/api/products",)



mongoose.connect(url).then((con) => {
    console.log("conectado a la base")
})
app.listen(port, () => {
    console.log(`escuchando en puerto ${port}`)
})