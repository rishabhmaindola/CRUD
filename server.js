const mongoose = require('mongoose')
const express = require('express')
const Product = require('./models/productModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) =>{
    res.send('ITS LIVE AND WEALTHY')
})

app.get('/products', async(req, res) => {
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


app.post('/products',async (req,res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product) 
    }catch(error){
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
})

app.put('/products/:id', async(req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `Cannot find any product with ID ${id}`})
        } 
        const updatedProduct = await Product.findById(id); 
        res.status(200).json(updatedProduct);

    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.delete('/products/:id',async (req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message:`Cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);

    } catch(error){
        res.status(500).json({message: error.message})
    }
})

mongoose.connect('mongodb+srv://Rishabh:rishabh05112@cluster0.if8ukjq.mongodb.net/CRUD_API?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(3000, () => {
        console.log('NODE API IS RUNNING ON PORT 3000')
    })
})
.catch((error)=>{
    console.log("Database connection error")
})