var express = require('express')
var app = express()

var userRoute = require('./userRoute')
app.use('/user', userRoute)

app.listen(3000)
