const mong = require('mongoose')
const comSchema = new mong.Schema({
    text:{
        type: String,
        required:[true, 'Comment title required']
    },
    user:{
        type: mong.Types.ObjectId,
        ref: 'BlogUsers',
        require:[true,'Required']
    }

},{timestamps:true})

const model = mong.model('Comments' , comSchema)

module.exports = model;