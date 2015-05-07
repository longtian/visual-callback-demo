/**
 * Created by yan on 15-5-7.
 */
var us = require('./us.js');
var last = us();
var data = [];

var timestamp = function (name, extra) {
  var _ = us();
  var str = [name, '\t', (_ - last), ' us', '\t'];
  if (arguments.length > 1) {
    //str.push(require('util').inspect(extra, {
    //  colors: true,
    //  depth: 2
    //}));

    str.push(extra[0].join("") + "\t" + extra[1].join(""));
  }
  data.push(str.join(''));
  last = us();
};

module.exports = function (cb) {
  process.on('exit', function () {
    cb(data);
  });
  return timestamp;
}