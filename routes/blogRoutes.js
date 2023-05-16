const exp = require('express')
const {getBlogs,createBlog,updateBlog, deleteBlog} = require('../controller/blogController')
const router = exp.Router();

router.get('/getBlogs', getBlogs);
router.post('/createBlog', createBlog);
router.put('/updateBlog/:id', updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;