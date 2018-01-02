var mongodb = require("mongodb");

exports.sendMessage = (db, message) => {
  var collection = db.collection('conversations');
  collection.insert(message);
}

exports.findConversationByIds = (db, toId, fromId, success, failure) => {
  var collection = db.collection('conversations');
  collection.find({
    toId: {
      $in: [toId, fromId]
    },
    fromId: {
      $in: [toId, fromId]
    }
  }).toArray(function(err, user) {
    if (user.length) {
      success(user);
    } else {
      failure();
    }
  });
}
