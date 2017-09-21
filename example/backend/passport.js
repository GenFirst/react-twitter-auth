'use strict';

var passport = require('passport'),
  TwitterTokenStrategy = require('passport-twitter-token'),
  User = require('mongoose').model('User'),
  twitterConfig = require('./twitter.config.js');

module.exports = function () {

  passport.use(new TwitterTokenStrategy({
      consumerKey: twitterConfig.consumerKey,
      consumerSecret: twitterConfig.consumerSecret,
      includeEmail: true
    },
    function (token, tokenSecret, profile, done) {
      User.upsertTwitterUser(token, tokenSecret, profile, function(err, user) {
        return done(err, user);
      });
    }));

};
