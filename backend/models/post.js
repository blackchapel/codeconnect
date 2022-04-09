// Importing modules
const mongoose = require('mongoose');
const User = require('./user');

// Creating the schema
const postSchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            required: true,
            trim: true
        },

        content: {
            type: String,
            required: true,
        },

        author: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        },

        interestedUsers: [{
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'User'
        }]
    },
    { timestamps: true },
    { versionKey: false }
);

const Post = mongoose.model('Post', postSchema);

// Exporting modules
module.exports = Post;