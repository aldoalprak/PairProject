const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let menuRoutes = require('./routes/menu') 

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/menus', menuRoutes)

app.listen(3000)