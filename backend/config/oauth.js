// Importing modules
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/user');
const dotenv = require('dotenv').config();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const currentUser = await User.findById(id);
    done(null, currentUser);
});

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/api/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));