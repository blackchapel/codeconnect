// Importing modules
const Post = require('../models/post');
const User = require('../models/user');

const viewUserPosts = async (req, res) =>  {
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

module.exports = {
    viewUserPosts
};