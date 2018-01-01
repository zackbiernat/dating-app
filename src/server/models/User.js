let MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let url = process.env.DB_URL;
let signUpUser = require('.././utils/userHelpers.js').signUpUser;
let findUserByEmail = require('.././utils/userHelpers.js').findUserByEmail;

exports.getUserProfile = (req, res) => {
  console.log(req.query)
  let email = req.query.email;
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return console.error(err);
    } else {
      findUserByEmail(db, email
        , (user) => {
        res.status(200).send(user[0]);
      }, (user) => {
        res.status(404).send('Email not signed up yet');
      })
    }
    db.close();
  })
};

exports.postUserProfile = (req, res) => {
  let newUser = req.body;
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return console.error(err);
    } else {
      signUpUser(db, newUser, () => {
        console.log('Created Profile:', newUser);
        db.close();
      });
    }

  })
};
