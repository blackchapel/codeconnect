// Importing modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const db = require('./connection');
const cookieParser = require('cookie-parser');
const passport = require('passport');
// const cookieSession = require('cookie-session');
const path = require("path");
const GitHubStrategy = require('passport-github').Strategy;
const passportSetup = require('./config/oauth');
const User = require("./models/user");

// Initializing an express app
const app = express();

// Server Port
const PORT = process.env.PORT || 3001;

// Formatting incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
// app.use(cookieSession({
//   maxAge: 24 * 60 * 60 * 1000,
//   keys: [process.env.COOKIE_KEY]
// }));

// Initialize passport
// app.use(passport.session());

// Logging
app.use(morgan('dev'));

// Importing Routes
const auth = require('./routes/auth');
const blog = require('./routes/blog');
const post = require('./routes/post');
const fetch = require('./routes/api');

// Routes
app.use('/api/auth', auth);
app.use('/api/blog', blog);
app.use('/api/post', post);
app.use('/api/fetch', fetch);

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});