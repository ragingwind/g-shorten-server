'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT;

console.log(port);

app.get('/shorten/', function (req, res) {
    res.send('shortened');
});

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server is started at http://:%s:%s', host, port);
});
