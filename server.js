const express = require('express')
const app = express();

app.get('/', (req, res) =>{
    res.send('ITS LIVE AND WEALTHY')
})


app.listen(3000, () => {
    console.log('NODE API IS RUNNING ON PORT 3000')
})