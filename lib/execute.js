/**
 * Created by wyver_000 on 2015/5/7.
 */

var child_process = require('child_process');
var fs = require('fs');
function evalScript(code, cb) {
  fs.writeFileSync('tmp.js', "require('./');process.nextTick(function(){" + code + "});");
  child_process.exec('node tmp.js', function (err, result) {
    cb(err, result);
  });
}

module.exports = evalScript;
