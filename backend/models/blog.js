// Importing modules
const mongoose = require('mongoose');
const User = require('./user');

// Creating the schema
const blogSchema = new mongoose.Schema(
    {
        title: {
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
        }
    },
    { timestamps: true },
    { versionKey: false }
);

const Blog = mongoose.model('Blog', blogSchema);

// Exporting modules
module.exports = Blog;