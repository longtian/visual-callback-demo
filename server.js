/**
 * Created by wyver_000 on 2015/5/7.
 */
var express = require('express');
var app = express();
var serverStatic = express.static('public');
var es = require('./lib/execute.js');
app.use(serverStatic);
app.get('/eval', function (req, res) {
  var code = req.query['code'];
  es(code, function (err, data) {
    if (data) {
      var processed = data.split("\n").map(function (item) {
        var tuple = item.trim().split('\t');
        tuple[1]=parseInt(tuple[1]);
        tuple[2]=parseInt(tuple[2]);
        return tuple;
      });
      processed.shift();
      res.json(processed);
    } else {
      console.error(err);
      res.end( 'error');
    }
  })

});

app.listen(8080);