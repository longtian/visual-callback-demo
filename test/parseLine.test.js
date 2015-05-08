/**
 * Created by yan on 15-5-8.
 */

var parse = require('../lib/parseLine');

require('readline').createInterface({
  input: require('fs').createReadStream('./raw'),
  terminal: false
}).on('line', function (line) {
  console.log(parse(line));
});
