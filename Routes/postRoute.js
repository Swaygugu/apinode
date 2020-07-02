var express = require('express')
const { index, createPost,getPostById,updatePost,deletePost } = require('../Controllers/postControllers')
var router = express.Router()




router.get('/', index)
router.get('/:id', getPostById)
router.post('/', createPost)
router.put('/', updatePost)
router.delete('/', deletePost)















module.exports = router