'use strict';

var express = require('express');
var got = require('got');
var app = express();
var port = process.env.PORT;
var url = 'https://www.googleapis.com/urlshortener/v1/url?key=' + process.env.APIKEY

app.get('/shorten/', function (req, res) {
  var opts = {
    body: JSON.stringify({longUrl: req.query.longurl}),
    headers: {
      'content-type': 'application/json'
    },
    strictSSL: true,
    json: true
  };

  console.log('Request shorten job with longurl', opts.body);

  got.post(url, opts, function(err, data) {
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
