var express = require('express')
var router = express.Router()

router.get('/first', function (req, res) {
  res.send('first on user')
})

router.get('/second', function (req, res) {
  res.send('second on user')
})

router.get('/walk',(req,res)=>{
    res.send('dog walk')
})

router.get('/play',(req,res)=>{
    res.send('dog play')
})

router.get('/eat',(req,res)=>{
    res.send('cat eat')
})

router.get('/sleep',(req,res)=>{
    res.send('cat sleep')
})


module.exports = router
