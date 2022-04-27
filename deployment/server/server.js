const express = require ('express')
const path = require('path')
const app = express()
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
  })
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'))
})  
const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})
console.log(__dirname)
