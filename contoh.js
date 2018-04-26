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
app.get('/',function(req,res){
  res.send('login')
})

app.get('/package',function(req,res){
  res.send('pilih menu')
})

app.get('/daftarmenu',function(req,res){
  res.send('silakan pilih menu')
})

app.get('/')





app.listen(3000)
