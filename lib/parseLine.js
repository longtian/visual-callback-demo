/**
 * Created by yan on 15-5-8.
 */

module.exports = function (str) {
  return [
    parseFloat(str.slice(0, 17), 10),
    str.slice(18, str.indexOf('(')),
    str.slice(str.indexOf('('), str.indexOf(' = ')).trim(),
    str.slice(str.indexOf(' = ') + 2).trim()
  ]
}
