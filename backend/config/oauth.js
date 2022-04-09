// Importing modules
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/user');
const dotenv = require('dotenv').config();

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    const currentUser = await User.findById(id);
    done(null, currentUser);
});

passport.use(
	new GitHubStrategy({
    	clientID: process.env.GITHUB_CLIENT_ID,
    	clientSecret: process.env.GITHUB_CLIENT_SECRET,
    	callbackURL: "http://localhost:3001/api/auth/github/callback"
  	}, async (accessToken, refreshToken, profile, done) => {
		const currentUser = await User.findOne({ githubId: profile.id });
		if (currentUser) {
			 done(null, currentUser);
		} else {
			const newUser = new User({
				name: profile.displayName,
				username: profile.username,
				githubId: profile.id,
				githubAccessToken: accessToken,
				displayPicture: profile.photos[0].value
			});
			await newUser.save();
			done(null, newUser);
		}
  	}
));