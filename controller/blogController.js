const blogModel = require('../models/blogs')
const userModel = require('../models/blogUsers')
const mong = require('mongoose')

exports.getBlogs = async (req, res) => {
    try {
        const allBlogs = await blogModel.find({});
        return res.status(200).send({ message: 'All Blogs Loaded', success: true, BlogsCount: allBlogs.length, allBlogs })
    } catch (error) {
        return res.status(500).send({ message: 'Error Loading All Users', success: false, error })
    }
};

exports.createBlog = async (req, res) => {
    try {
        const { title, description, author, img, owner } = req.body;
        if (!title || !description || !author || !img || !owner) {
            return res.status(500).send({ message: 'Complete all fields', success: false })
        }
        const checkUser = await userModel.findById(owner)
        if (!checkUser) {
            return res.status(404).send({ message: 'User not found', success: false })
        }
        const post = new blogModel({ title, description, author, img, owner })
        // const session = await mong.startSession();
        //session.startTransaction();
        //await post.save({session});
        checkUser.blogs.push(post);
        await checkUser.save();
        //await session.commitTransaction();
        await post.save();

        return res.status(201).send({ message: 'Blog Created', success: true, post })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: 'Error in creating blog', success: false, error })
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        await blogModel.findOneAndDelete(req.params.id)
        return res.status(201).send({ message: 'Blog Deleted', success: true })
    } catch (error) {
        return res.status(500).send({ message: 'Error Deleting', success: false, error })
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, author, img } = req.body;
        const blogg = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({ message: 'Blog Updated', success: true, blogg })
    } catch (error) {
        return res.status(400).send({ message: 'Error Updating', success: false, error })
    }
};
