/**
 * Created by yan on 15-5-7.
 */

function hr() {
  var _ = process.hrtime();
  return (_[0] * 1E6) + (_[1] / 1E3);
}

_begin = hr();


module.exports = function () {
  return Math.round(hr() - _begin);
};