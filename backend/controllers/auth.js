// Importing modules
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

// Signup
const signup = async (req, res) => {
    try {
        let newUser = new User(req.body);
        await newUser.save();
        const token = await User.generatejwt(newUser._id);
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });

        // Sending a response back
        res.status(201).json({
            message: 'Successfully signed up!',
            data: {
                newUser
            },
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Login
const login = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email });
        if(!user) {
            res.status(404).json({
                message: 'User not found!'
            });
            return;
        }
        
        const isMatch = await bcryptjs.compare(req.body.password, user.password);
        if(!isMatch) {
            res.status(401).json({
                message: 'Invalid credentials!'
            });
            return;
        }
        
        const token = await User.generatejwt(user._id);
        res.cookie('token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });

        res.status(200).json({
            message: 'User Verified!',
            data: { 
                user
            }
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Logout
const logout = async (req, res) => {
    try {
        const currentUser = req.user;
        res.cookie('token', '', { maxAge: 1 });
        res.status(200).json({
            message: 'Successfully logged out!'
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

// Exporting modules
module.exports = {
    signup,
    login,
    logout
};