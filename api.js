const express = require('express');
const bodyParse = require('body-parser');
require('./dal/database');
const config = require('config');

const app = express();

app.use(bodyParse.urlencoded({extended: true}))
.use(bodyParse.json());

app.use('/api', require('./routes/product'));
app.use('/api', require('./routes/category'));

const port = parseInt(process.env.PORT, 10) || 8000;

const server = app.listen(port, () => {
  console.log('Server is running on port ' + port);
});