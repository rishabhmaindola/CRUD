import express from 'express'
import morgan from 'morgan'
import productRoutes from './routes/productRoutes.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('ITs LIVE')
});


app.use('/api/v1/products', productRoutes)

export default app