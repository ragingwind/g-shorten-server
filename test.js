 /*global describe, it */
'use strict';

var assert = require('assert');
var shorten = require('./shorten');

describe('Google shorten', function () {
  it('should return shorten url', function (done) {
    shorten('https://google.com', process.env.APIKEY, function(err, data) {

      console.log(process.env.A);
      console.log(process.env.APIKEY);
      console.log(err, data);

      assert(!err);
      assert(data);

      console.log(data);
      done();
    });
  });
})
