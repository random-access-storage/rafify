var rafify = require('./')
var test = require('tape')
var raf = require('random-access-file')

test('rafify', function (t) {
  t.ok(rafify('file.txt') instanceof raf)
  t.ok(rafify(raf('file.txt')) instanceof raf)
  t.end()
})
