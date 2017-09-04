'use strict';

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

module.exports = function () {

  var db = mongoose.connect('mongodb://localhost:27017/twitter-demo');

  var UserSchema = new Schema({
    email: {
      type: String, required: true,
      trim: true, unique: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    twitterProvider: {
      type: {
        id: String,
        token: String
      },
      select: false
    }
  });

  UserSchema.set('toJSON', {getters: true, virtuals: true});

  UserSchema.statics.upsertTwitterUser = function(token, tokenSecret, profile, cb) {
    var that = this;
    return this.findOne({
      'twitterProvider.id': profile.id
    }, function(err, user) {
      // no user was found, lets create a new one
      if (!user) {
        var newUser = new that({
          email: profile.emails[0].value,
          twitterProvider: {
            id: profile.id,
            token: token,
            tokenSecret: tokenSecret
          }
        });

        newUser.save(function(error, savedUser) {
          if (error) {
            console.log(error);
          }
          return cb(error, savedUser);
        });
      } else {
        return cb(err, user);
      }
    });
  };

  mongoose.model('User', UserSchema);

  return db;
};
