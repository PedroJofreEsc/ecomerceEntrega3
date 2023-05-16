import { Router } from "express";
import { ProductsManager } from "../manager/products.manager.js";
const router = Router()

router.get("/", async (req, res) => {
    //debe devolver todos los productos
    //si se entrega parametro limit debe devolver hasta esa cantidad
    const products = await ProductsManager.getAll()
    res.send(products)
})

router.get("/:pid", async (req, res) => {
    //debe devolver solo el producto pid
    const pid = req.params.pid
    const product = await ProductsManager.getProductById(pid)
    res.send(product)
})

router.post("/", async (req, res) => {
    const { title, description, price, code, stock } = req.body
    const newProducts = await ProductsManager.create({ title, description, price, code, stock })
    res.send(newProducts)
})

router.put("/:pid", async (req, res) => {
    const pid = req.params.pid
    const data = req.body
    console.log(pid, data)
    const updateProduct = await ProductsManager.updateProduct(pid, data)
    res.send(updateProduct)
})

router.delete("/:pid", async (req, res) => {
    const pid = req.params.pid
    const deleteProduct = await ProductsManager.delete(pid)
    res.send(deleteProduct)
})
export { router as productsRouter }