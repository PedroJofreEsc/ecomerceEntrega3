import { Router } from "express";
import { CartsManager } from "../manager/carts.manager.js";

const router = Router()

router.get("/", async (req, res) => {
    const cart = await CartsManager.getAll()
    res.send(cart)
})

router.get("/:cid", async (req, res) => {
    const cid = req.params.cid
    const cart = await CartsManager.getById(cid)
    res.send(cart)
})

router.post("/", async (req, res) => {
    const newCart = await CartsManager.create(
        { products: [] }
    )
    res.send(newCart)
})

router.post("/:cid/product/:pid", async (req, res) => {
    const cid = req.params.cid
    const pid = req.params.pid
    const newCart = await CartsManager.addProducts(cid, pid)
    res.send(newCart)
})

export { router as cartsRouter }