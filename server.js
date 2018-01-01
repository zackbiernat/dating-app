const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dbRouting = require('./src/server/config.js');
let http = require('http').Server(app);
let io = require('socket.io')(http);
require('dotenv').config();


let corsOption = {
  origin: true,
  methods: 'OPTIONS,GET,HEAD,PUT,POST,DELETE',
  credentials: true
};
app.use(cors(corsOption));
app.use(express.static((__dirname + '/src/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(dbRouting);

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/public/index.html');
});

// Socket config
io.on('connection', (socket) => {
  console.log('User connected');
  socket.on('chat message', function(msg){
    console.log('message: ' + msg.text + 'From: ' + msg.user);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  })
})

const port = process.env.PORT || 3000;


http.listen(port, () => {
  console.log('SERVER STARTED: Listening on port:' + port);
});

