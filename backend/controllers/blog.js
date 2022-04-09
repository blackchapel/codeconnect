// Importing modules
const Blog = require('../models/blog');
const User = require('../models/user');

const viewUserBlogs = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId).populate('blogsCreated');
        if (!currentUser) {
            res.status(404).json({
                message: 'User not found!'
            });
            return;
        } 

        const blogs = currentUser.blogsCreated;
        if (!blogs) {
            res.status(404).json({
                message: 'Blogs not found!'
            });
            return;
        }

        res.status(200).json({
            data: blogs
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const viewBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author');
        if (!blog) {
            res.status(404).json({
                message: 'Blog not found!'
            });
            return;
        }

        res.status(200).json({
            data: blog
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    viewUserBlogs,
    viewBlog
};