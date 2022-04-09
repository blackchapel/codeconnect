const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const dotenv = require('dotenv').config();

const verifyjwt =  async (req, res, next) => {
    try{
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id);

        if (!user) {
            res.status(401).json({
                message: 'Please Authenticate'
            });
            return;
        }

        req.user = user;

        next();
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
}

module.exports = verifyjwt;