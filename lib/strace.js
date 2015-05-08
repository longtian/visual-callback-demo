/**
 * Created by yan on 15-5-8.
 */

module.exports = function (cmd, cb) {
  var child = require('child_process').exec("E=`date +%s.%N` strace -ttt -qq " + cmd);
  var parseLine = require('./parseLine.js');
  var straceIo = require('readline').createInterface({
    input: child.stderr,
    terminal: false
  });

  var cache = [];
  straceIo.on('close', function () {
    cb(cache);
  });

  var firstTime = null;
  straceIo.on('line', function (line) {
    line = parseLine(line);
    if (!firstTime) {
      firstTime = line[0];
      line[0] = 0;
    } else {
      line[0] = (line[0] - firstTime) * 1E6;
    }
    cache.push(line);
  });
}
