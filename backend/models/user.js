// Importing modules
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const Post = require('./post')
const Blog = require('./blog');

// Creating the schema
const userSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            trim: true
        },

        username: {
            type: String, 
            trim :true
        },

        email: {
            type: String,
            trim: true,
            unique: true,
            lowercase: true,
            match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/, 'Invalid email address!']
        },

        password: {
            type: String,
            trim: true,
            minlength: [8, 'Password too short!'],
            maxlength: [128, 'Password too long!']
        },

        githubId: {
            type: String,
            trim: true
        },

        githubAccessToken: {
            type: String,
            trim: true
        },

        displayPicture: {
            type: String
        },

        postsCreated: [{
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Post'
        }],

        blogsCreated: [{
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Blog'
        }]
    },
    { timestamps: true },
    { versionKey: false }
);

// Hashing the password
userSchema.pre('save', async function(next) {
    let currentUser = this;
    if(!currentUser.isModified('password')) { 
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        currentUser.password = await bcrypt.hash(currentUser.password, salt);
        return next();
    } catch(error) {
        return next(error);
    }
});

// Generating jwt
userSchema.statics.generatejwt = async (userid) => {
    const user = await User.findById(userid);
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};

const User = mongoose.model('User', userSchema);

// Exporting the module
module.exports = User;