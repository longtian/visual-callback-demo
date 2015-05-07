/**
 * Created by yan on 15-5-7.
 */
require('../');

require('http').createServer(function (req, res) {
  process.nextTick(function () {
    setTimeout(function () {
      res.end();
    }, 30);
  });

}).listen(3000);

process.on('SIGINT', function () {
  process.exit();
});