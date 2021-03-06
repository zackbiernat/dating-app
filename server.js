const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dbRouting = require('./src/server/config.js');
let http = require('http').Server(app);
require('dotenv').config();

const postConversations = require('./src/server/models/Conversation.js').postConversations;

let corsOption = {
  origin: "*",
  methods: 'OPTIONS,GET,HEAD,PUT,POST,DELETE',
  credentials: true,
  exposedHeaders: 'token'
};
app.use(cors(corsOption));
app.use(express.static((__dirname + '/src/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(dbRouting);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/public/index.html');
});


const port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log('SERVER STARTED: Listening on port:' + port);
});

// Socket config
let io = require('socket.io').listen(server);
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('chat message', function(msg){
    postConversations(msg.toId, msg.fromId, msg.toUN, msg.fromUN, msg.message)
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
});

