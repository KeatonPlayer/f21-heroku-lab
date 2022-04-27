const express = require ('express')
const path = require('path')
const app = express()

app.get('/css', function (req, res){
    res.sendFile(path.join(__dirname, '../public/style.css'))
})
app.get('/js', function (req, res){
    res.sendFile(path.join(__dirname, '../public/index.js'))
})

const port  = process.env.PORT || 4005
app.listen(port, function(){
console.log(`Listening on da port that is ${port}`)
})

