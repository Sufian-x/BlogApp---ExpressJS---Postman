const mong = require('mongoose')
const blogSchema = new mong.Schema({
    username:{
        type: String,
        required:[true, 'Username required']
    },
    email:{
        type: String,
        required:[true, 'Email required']
    },
    pass:{
        type: String,
        required:[true, 'Password required']
    },
    blogs:[{
        type: mong.Types.ObjectId,
        ref: 'Blogs'
    }]
},{timestamps:true})

const model = mong.model('BlogUsers' , blogSchema)

module.exports = model;