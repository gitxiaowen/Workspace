var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address||'localhost';
  var port = server.address().port||'3000';

  console.log('Example app listening at http://%s:%s', host, port);
});

