// Importing modules
const Post = require('../models/post');
const User = require('../models/user');

const createPost = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        let newPost = new Post(req.body);
        newPost.author = currentUser._id;
        await newPost.save();

        res.status(201).json({
            message: 'Post created successfully!',
            data: newPost
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const viewUserPosts = async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId).populate('postsCreated');
        if (!currentUser) {
            res.status(404).json({
                message: 'User not found!'
            });
            return;
        }

        const posts = currentUser.postsCreated;
        if(!posts) {
            res.status(404).json({
                message: 'Posts not found!'
            });
            return;
        }

        res.status(200).json({
            data: posts
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const view10Posts = async (req, res) => {
    try {
        const allPosts = await Post.find();
        const tenPosts = [];

        if(allPosts == 0) {
            res.status(404).json({
                message: 'Posts not found!'
            });
            return;
        }

        for(let i = 0; i < 10; i++) {
            tenPosts[i] = allPosts[i];
        }

        res.status(200).json({
            data: tenPosts
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const isInterested = async (req, res) => {
    try {
        const currentPost = await Post.findById(req.body.postid).populate('author');
        currentPost.interestedUsers.push(req.body.userid);
        await currentPost.save();

        res.status(201).json({
            message: 'Interested user added successfully!',
            data: newPost
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

module.exports = {
    createPost,
    viewUserPosts,
    view10Posts,
    isInterested
};