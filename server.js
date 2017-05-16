const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./controllers')(app);

app.listen(5000, (req, res) => {
  console.log('server listening on port 5000');
});
