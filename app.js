const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
let ejs = require('ejs')
app.set('view engine', 'ejs')
app.set('views', '/views')


//============ Home ==========================
const homeRoutes = require('./routes/home.js');
app.use('/',homeRoutes)

const customerRoutes = require('./routes/customer.js');
app.use('/customer',customerRoutes)





app.listen(3000)
