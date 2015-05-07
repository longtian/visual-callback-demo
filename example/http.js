/**
 * Created by yan on 15-5-7.
 */
require('../');

require('http').createServer(function (req, res) {
  res.end();
}).listen(3000);

process.on('SIGINT', function () {
  process.stdout.write('\033c');
  process.exit();
});