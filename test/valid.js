import test from 'tape'

import ip2int from '../src/index'

test('valid inputs without spaces', (t) => {
  t.plan(2)

  t.equal(ip2int('1.1.1.1'), (1 << 24) + (1 << 16) + (1 << 8) + (1 << 0))

  t.equal(ip2int('12.0.101.1'), (12 << 24) + (0 << 16) + (101 << 8) + (1 << 0))

})

test('valid inputs with spaces', (t) => {
  t.plan(4)

  t.equal(ip2int('1.1 .1.1'), (1 << 24) + (1 << 16) + (1 << 8) + (1 << 0))

  t.equal(ip2int('1.1. 1.1'), (1 << 24) + (1 << 16) + (1 << 8) + (1 << 0))

  t.equal(ip2int('1. 1 . 1. 1'), (1 << 24) + (1 << 16) + (1 << 8) + (1 << 0))

  t.equal(ip2int('1.    1     . 1. 1'), (1 << 24) + (1 << 16) + (1 << 8) + (1 << 0))
})

