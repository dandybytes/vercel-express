const express = require('express')
const app = express()

const product = require('./api/product')

const port = process.env.PORT || 5000

app.use('/api/product', product)

app.listen(port, () => console.log(`Server running on port ${port}`))