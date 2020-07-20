const express = require("express")
const bodyParser = require("body-parser")
const mysqlConnection =require('./connection')
const CustomerRoutes = require('./routes/customers')
const ProductRoutes = require('./routes/products')
//const OrderHistoryRoutes = require('./routes/orderDetails')

const port = process.env.PORT || 3000;
var app = express()
app.use(bodyParser.json()) // configure the application
app.use('/customer',CustomerRoutes)
app.use('/product',ProductRoutes)
//app.use('/orderhistory',OrderHistoryRoutes)

app.get('/', (req, res) => res.send('Welcome to Northwind NodeJS API !'))

app.listen(port, () => console.log(`Listening on port ${port}..`));

//module.exports=app


