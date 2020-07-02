var express = require('express')
var userRoute = require('./Routes/userRoute')
var postRoute = require('./Routes/postRoute')
const {intercepter} = require('./middleware/logMiddleware');



var app = express()



app.use(express.static('./public/'))
app.use(express.json());
app.use(intercepter);

app.use('/user', userRoute)

app.use('/post',postRoute)


app.listen(3000,console.log('3000'))

console.log('hello')