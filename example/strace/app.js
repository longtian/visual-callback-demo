//require('http').createServer(function (req, res) {
//  res.end('ok');
//}).listen(8889);

console.log(process.env.E, '-');

function us() {
  var _ = process.hrtime();
  return _[0] * 1E6 + _[1] / 1E3;
}

function us_now() {
  return Date.now()/1000;
}

console.log(us_now());