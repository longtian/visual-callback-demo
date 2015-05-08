/**
 * Created by yan on 15-5-8.
 */
require('../lib/strace.js')('echo', function () {
  console.log(arguments);
});