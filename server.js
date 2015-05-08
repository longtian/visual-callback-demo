/**
 * Created by wyver_000 on 2015/5/7.
 */
var express = require('express');
var app = express();
var serverStatic = express.static('public');
var es = require('./lib/execute.js');
var strace = require('./lib/strace.js');
app.use(serverStatic);


app.get('/eval', function (req, res) {
  var code = req.query['code'];
  es(code, function (err, data) {
    if (data) {
      var processed = data.split("\n").map(function (item) {
        var tuple = item.trim().split('\t');
        tuple[1] = parseInt(tuple[1]);
        tuple[2] = parseInt(tuple[2]);
        return tuple;
      });
      processed.shift();
      res.json(processed);
    } else {
      console.error(err);
      res.end('error');
    }
  });
});

app.get('/straceSync', function (req, res) {
  var code = req.query['code'];
  require('fs').writeFileSync('tmp.js', code);
  strace('node tmp.js', function (list) {
    var duration = 1.02 * list[list.length - 1][0] - list[0][0];
    list.forEach(function (item) {
      item.splice(1, 0, item[0] / duration * 100);
    });
    res.json(list);
  });
})

app.listen(8080);