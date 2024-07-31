import express from "express"
import productController from '../controllers/productController.js'

const router = express.Router()

router.post('/create', productController.createProduct)
router.get('/all', productController.getAllProducts)
router.get('/product/:id', productController.getProductById)
router.put('/product/update/:id', productController.updateProduct)
router.delete('/product/delete/:id', productController.deleteProduct)

export default router