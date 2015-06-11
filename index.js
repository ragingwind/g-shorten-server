'use strict';

var express = require('express');
var app = express();

app.get('/shorten/', function (req, res) {
    res.send('shortened');
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server is started at http://:%s:%s', host, port);
});
