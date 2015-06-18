'use strict';

var got = require('got');

module.exports = function (longurl, key, cb) {
  var url = 'https://www.googleapis.com/urlshortener/v1/url?key=' + key;
  var opts = {
    body: JSON.stringify({longUrl: longurl}),
    headers: {
      'content-type': 'application/json'
    },
    strictSSL: true,
    json: true
  };

  got.post(url, opts, cb);
}

