const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const url = process.env.DB_URL;

exports.getConversationByIds = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return console.error(err);
    } else {

    }
    db.close();
  })

}
