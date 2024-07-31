import mongoose from 'mongoose';
import Product from "../models/Product.js"

const createProduct = async (req, res) => {
    try {
        const { name, quantity, price, image } = req.body

        if (!name || !price) {
            return res.status(400).json({
                success: false,
                message: 'Validation Error: Name, quantity, and price are required.'
            });
        }

        const newProduct = await Product.create({
            name,
            quantity,
            price,
            image
        });

        console.log('New Product:', newProduct);

        res.status(201).json({
            success: true,
            data: newProduct,
            message: 'Product Created Successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: {
                code: "INTERNAL_SERVER_ERROR",
                message: 'An unexpected error occurred: ' + error.message
            }
        })
    }
}


const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.query.page, 10) || 1
        const limit = parseInt(req.query.limit, 10) || 10
        const skip = (page - 1) * limit

        const allProducts = await Product.find({})
            .skip(skip)
            .limit(limit)
            .exec()

        const totalProducts = await Product.countDocuments()

        res.status(200).json({
            success: true,
            data: allProducts,
            pagination: {
                page,
                limit,
                totalProducts
            },
            message: 'All Products Fetched Successfully'
        })
    } catch (error) {
        console.error('Error fetching products:', error.message)

        res.status(500).json({
            success: false,
            error: {
                code: "INTERNAL_SERVER_ERROR",
                message: 'An unexpected error occurred while fetching products: ' + error.message
            }
        })
    }
};

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.isValidObjectId(id)) {
            return res.status(406).json({
                success: false,
                message: 'Invalid id Format'
            })
        }

        const product = await Product.findById(id)
        if (product) {
            res.status(200).json({
                success: true,
                data: product,
                message: `Product with id:${id} fetched Successfully`
            })
        } else {
            res.status(404).json({
                success: false,
                message: `Product with id:${id} does not exists.`
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: {
                code: "INTERNAL_SERVER_ERROR",
                message: 'An unexpected error occurred while fetching product: ' + error.message
            }
        })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const { name, quantity, price, image } = req.body

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid id Format'
            })
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            quantity,
            price,
            image
        }, {
            new: true,
            runValidators: true
        })

        if (updatedProduct) {
            return res.status(200).json({
                success: true,
                data: updatedProduct,
                message: `Product with ID ${id} updated successfully`
            })
        } else {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${id} does not exist`
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: {
                code: "INTERNAL_SERVER_ERROR",
                message: 'An unexpected error occurred while updating product: ' + error.message
            }
        })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid id Format'
            })
        }
        
        const product = await Product.findByIdAndDelete(id)

        if (product) {
            return res.status(200).json({
                success: true,
                message: `Product with ID ${id} deleted successfully`
            });
        } else {
            return res.status(404).json({
                success: false,
                message: `Product with ID ${id} does not exist`
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: {
                code: "INTERNAL_SERVER_ERROR",
                message: 'An unexpected error occurred while deleting product: ' + error.message
            }
        })
    }
}

export default {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}
