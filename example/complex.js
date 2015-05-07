/**
 * Created by yan on 15-5-7.
 */
var timestamp = require('../').timestamp;


process.nextTick(function () {

  setTimeout(function () {
    process.nextTick(function () {
    })
  }, 0)
  process.nextTick(function () {
  });

  process.nextTick(function () {
    process.nextTick(function () {
    });
  });

  process.nextTick(function () {
  });
});

process.nextTick(function () {
  process.nextTick(function () {
  });
});

process.nextTick(function () {
});