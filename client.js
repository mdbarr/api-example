#!/usr/bin/env node

var restify = require('restify');

var client = restify.createJsonClient({
  url: 'http://localhost:8081',
  version: '~1.0'
});

client.get('/echo/mark', function (err, req, res, obj) {
  console.log('Server returned: %j', obj);
});