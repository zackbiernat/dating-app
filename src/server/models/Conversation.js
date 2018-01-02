const MongoClient = require('mongodb').MongoClient;
let findConversationByIds = require('.././utils/conversationHelpers.js').findConversationByIds;
let sendMessage = require('.././utils/conversationHelpers.js').sendMessage;

require('dotenv').config();

const url = process.env.DB_URL;
/*
{
  messages: [
    {
      fromId: 12401732,
      fromUN: 'zackb',
      toId: 1234634633,
      toUN: 'suzyb'
      message: "blah",

    }
  ]
}
*/


exports.getConversationByIds = (req, res) => {
  let toId = req.body.toId;
  let fromId = req.body.fromId;
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return console.error(err);
    } else {
      findConversationByIds(db, toId, fromId, (data) => {
        res.status(200).send(data);
      }, () => {
        res.status(404).send([]);
      })
    }
    db.close();
  })
}


exports.postConversations = (toId, fromId, toName, fromName, message) => {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      return console.error(err);
    } else {
      let formatMessage = {
        fromId: fromId,
        fromUN: fromName,
        toId: toId,
        toUN: toName,
        message: message
      };
      sendMessage(db, formatMessage);
      console.log('Posted Message', formatMessage);
    }
    db.close();
  })
}
