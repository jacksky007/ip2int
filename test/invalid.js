import test from 'tape'

import ip2int from '../src/index'

test('invalid inputs without spaces', (t) => {
  const msg = /space between digits is not allowed/
  t.plan(2)

  t.throws(() => ip2int('1.1.1 1.1'), msg)

  t.throws(() => ip2int('12.0.1   1 .1'), msg)

})

