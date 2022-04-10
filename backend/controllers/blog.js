// Importing modules
const Blog = require('../models/blog');
const User = require('../models/user');

const createBlog = async (req, res) => {
    try {
        console.log(req.body);
        let newBlog = new Blog(req.body);
        newBlog.author = req.body.author;
        await newBlog.save();

        res.status(201).json({
            message: 'Blog created successfully!',
            data: createBlog
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

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

const view10Blogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        const tenBlogs = [];

        if(allBlogs.length == 0) {
            res.status(404).json({
                message: 'Blogs not found!'
            });
            return;
        }

        for(let i = 0; i < 10; i++) {
            tenBlogs[i] = allBlogs[i];
        }

        res.status(200).json({
            data: tenBlogs
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    createBlog,
    viewUserBlogs,
    viewBlog,
    view10Blogs
};