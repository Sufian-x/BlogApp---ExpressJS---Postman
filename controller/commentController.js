const blogModel = require('../models/blogs')
const userModel = require('../models/blogUsers')
const comModel = require('../models/comments')
const mong = require('mongoose')

exports.getComments = async (req, res) => {
    try {
        const comms = await comModel.find({});
        return res.status(200).send({ message: 'All Comments Loaded', success: true, CommentCount: comms.length, comms })
    } catch (error) {
        return res.status(500).send({ message: 'Error Loading All Users', success: false, error })
    }
};

exports.createComment = async (req, res) => {
    try {
        const { text, user } = req.body;
        if (!text || !user) {
            return res.status(500).send({ message: 'Comment not found', success: false })
        }
        const checkUser = await userModel.findById(owner)
        if (!checkUser) {
            return res.status(404).send({ message: 'User not found', success: false })
        }
        const post = new blogModel({ title, description, author, img, owner })
        
        checkUser.blogs.push(post);
        await checkUser.save();
        await post.save();

        return res.status(201).send({ message: 'Comment Done', success: true, post })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Error in creating comment', success: false, error })
    }
};

