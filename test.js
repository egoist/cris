import test from 'ava'
import cris from './src/index'

test('lowercase', t => {
  const ret = cris('iPhone').lowercase()
  t.true(ret.error[0].indexOf('lowercase') !== -1)
})

