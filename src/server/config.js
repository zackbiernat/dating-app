const express = require('express');
const router = express.Router();

require('dotenv').config();

// const getSinglesBySex;
// const filterByOnline;
const getUserByEmail = require('./models/User.js').getUserProfile;
const postUser = require('./models/User.js').postUserProfile;
const getConvo = require('./models/Conversation.js').getConversationByIds
// const goOnline;
// const goOffline;
// const getConversationsById;

// USER endpoints
router.post('/api/auth', getUserByEmail);
router.post('/api/user', postUser);
router.post('/api/conversation', getConvo);



module.exports = router;
