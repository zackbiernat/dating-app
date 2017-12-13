// const mongodb = require("mongodb");

exports.findUserByEmail = (db, email, success, failure) => {
  var collection = db.collection('users');
  collection.find({ "email": email }).toArray(function(err, user) {
    if (user.length) {
      success(user);
    } else {
      failure();
    }
  });
}

exports.signUpUser = (db, profile, cb) => {
  let collection = db.collection('users');
  collection.insert(profile, (err, result) => {
    cb(result);
  });
};