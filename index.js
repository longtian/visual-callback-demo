/**
 * Created by yan on 15-5-7.
 */
require('async-listener');
var us = require('./lib/us.js');
var timestamp = require('./lib/timestamp.js')(function (data) {
  require('fs').writeFileSync(Date.now() + '.log',data.join('\n'));
});
var ls = process.createAsyncListener({
  create: function (store) {
    store[0].push('+');
    timestamp('+', store);
  },
  before: function (context, store) {
    store[0].pop();
    store[1].push('*');
    timestamp(' {', store);
  },
  after: function (context, store) {
    store[1].pop();
    timestamp('  }', store);
  }
}, [[], []]);
process.addAsyncListener(ls);

module.exports = {
  us: us,
  timestamp: timestamp
}