const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

let corsOption = {
  origin: true,
  methods: 'OPTIONS,GET,HEAD,PUT,POST,DELETE',
  credentials: true
};
app.use(cors(corsOption));

app.use(express.static((__dirname + '/src/public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/src/public/index.html');
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log('SERVER STARTED: Listening on port:' + port);
});

