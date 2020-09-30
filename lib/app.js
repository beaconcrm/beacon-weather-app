const express = require('express');
const _ = require('lodash');
const moment = require('moment');
const cookieParser = require('cookie-parser');
const randInt = require('mout/random/randInt');
const pkg = require('../package.json');
const config = require('./config');


const app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('dist'));


app.get('*', (req, res) => {
  const { host, 'user-agent': userAgent } = req.headers;

  res.render('../views/index', {
    _,
    environment: config.environment,
    version: pkg.version,
    assetsHost: '',
    urlPath: req.path,
    castle: config.castle,
  });
});


module.exports = app;
