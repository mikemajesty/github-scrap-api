const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const favicon = require('serve-favicon');
const cors = require('cors');
 
app.use(cors());

app.use(bodyParser.json());

app.use(favicon('static/img/favicon.ico'));

app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendfile('static/index.html');
});

app.use('/', require('./server/api'));