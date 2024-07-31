import dotenv from 'dotenv'
import app from './app.js'
import connectToMongoDB from './database/MongoDBConfig.js'

dotenv.config()

const PORT = process.env.PORT || 3000

connectToMongoDB().then(() => {
    app.listen(PORT, () => {
        console.log(`API is running on port ${PORT}`)
    });
}).catch((error) => {
    console.error("Failed to connect to MongoDB:", error)
});

// app.listen(PORT, () => {
//     console.log('Server is up without DB connection')
// })