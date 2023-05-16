const mong = require('mongoose')
const blogSchema = new mong.Schema({
    title:{
        type: String,
        required:[true, 'Blog title required']
    },
    description:{
        type: String,
        required:[true, 'BLOG DESCRIPTION required']
    },
    author:{
        type: String,
        required:[true, 'Author Name required']
    },
    img:{
        type: String,
        required:[true, 'An image required']
    },
    owner:{
        type: mong.Types.ObjectId,
        ref: 'BlogUsers',
        require:[true,'Required']
    }

},{timestamps:true})

const model = mong.model('Blogs' , blogSchema)

module.exports = model;