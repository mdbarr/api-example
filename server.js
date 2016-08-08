#!/usr/bin/env node

var restify = require('restify');

var server = restify.createServer({
  name: 'api-example',
  version: '1.0.0'
});

server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});

server.listen(8081, function () {
  console.log('%s listening at %s', server.name, server.url);
});
