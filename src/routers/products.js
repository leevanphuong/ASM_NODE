import express from "express";
import { getAll, add, getOne, remove, update } from "../controllers/products";

const router = express.Router()

router.get('/products', getAll)
router.post('/products',add)
router.get('/products/:id',getOne)
router.delete('/products/:id',remove)
router.put('/products/:id', update)


export default router