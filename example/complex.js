/**
 * Created by yan on 15-5-7.
 */
var timestamp = require('../').timestamp;

timestamp('begin');

process.nextTick(function () {
  timestamp('1');

  process.nextTick(function () {
    //timestamp('1.1');
  });

  process.nextTick(function () {
    //timestamp('1.2');
    process.nextTick(function () {
      timestamp('1.2.1');
    });
  });

  process.nextTick(function () {
    //timestamp('1.3');
  });
});

process.nextTick(function () {
  //timestamp('2');

  process.nextTick(function () {
    //timestamp('2.1');
  });
});

process.nextTick(function () {
  //timestamp('3');
});