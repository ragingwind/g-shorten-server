'use strict';

var express = require('express');
var shorten = require('./shorten');
var app = express();
var port = process.env.PORT;

app.get('/shorten/', function (req, res) {
  var longurl = req.query.longurl;

  console.log('Request shorten job with longurl', longurl);
  shorten(longurl, process.env.APIKEY, function(err, data) {
    if (err) {
      console.log('Got an error', err);
      res.status(400);
    }

    console.log('Got a response', JSON.stringify(data));
    res.json(data);
  });
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server is started at http://:%s:%s', host, port);
});
