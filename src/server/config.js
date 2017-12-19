const express = require('express');
const router = express.Router();
require('dotenv').config();

// const getSinglesBySex;
// const filterByOnline;
const getUserByEmail = require('./models/User.js').getUserProfile;
const postUser = require('./models/User.js').postUserProfile;
// const goOnline;
// const goOffline;
// const getConversationsById;

// USER endpoints
router.get('/api/user', getUserByEmail);
router.post('/api/user', postUser);


module.exports = router;
