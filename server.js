const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/auth');

const app = express();
app.use(bodyParser.json());
app.use(cors());

require('./controllers')(app);

app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
