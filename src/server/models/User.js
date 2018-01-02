let MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
let jwt = require('jsonwebtoken');
let url = process.env.DB_URL;
let signUpUser = require('.././utils/userHelpers.js').signUpUser;
let findUserByEmail = require('.././utils/userHelpers.js').findUserByEmail;

exports.getUserProfile = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log('Email', email, 'Pass', password)
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return console.error(err);
    } else {
      findUserByEmail(db, email
        , (user) => {
          console.log('Pass', password, 'datapass', user[0].password)
        if (user[0].password === password) {
          let token = jwt.sign({user}, 'big-time-hash');
          res.token = token;
          console.log('user', user[0]);
          res.status(200).send(user[0]);
        }
      }, (noMatch) => {
        console.log('NO', noMatch)
        res.status(404).send();
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
