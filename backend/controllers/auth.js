// Importing modules
const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const passport = require('passport');
const passportSetup = require('../config/oauth');
const { createToken, maxAge } = require('../config/jwt');

// Signup
const signup = async (req, res) => {
    try {
        let newUser = new User(req.body);
        await newUser.save();
        const token = createToken(user._id);
        res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 });

        // Sending a response back
        res.status(201).json({
            message: 'Successfully signed up!',
            data: {
                newUser,
                token
            }
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
        const { email, password } = req.body;
        const user = await User.login(email, password);

        if (user.password) {
            const token = createToken(user._id);
            res.cookie('token', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).json({ user, token });
        } else if (user.googleId) {
            res.json({ message: 'Use Google sign in' });
        } else {
            res.json({ user });
        }
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

// Send user to frontend after OAuth
const sendUser = (req, res) => {
    const currentUser = req.app.get('user');
    res.json(currentUser);
};

// OAuth Login
const OAuthLogin = passport.authenticate('github', {
    scope: ["profile"],
});

// OAuth Callback
const OAuthCallback = passport.authenticate('github', {
    failureRedirect: 'http://localhost:3000/login'
});

// Exporting modules
module.exports = {
    signup,
    login,
    logout,
    sendUser,
    OAuthLogin,
    OAuthCallback
};