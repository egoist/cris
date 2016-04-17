import test from 'ava'
import cris from './src/index'

test('lowercase uppercase', t => {
  const lowercase = cris('iPhone').lowercase()
  const uppercase = cris('iPhone').uppercase()
  t.true(lowercase.error[0].indexOf('lowercase') !== -1)
  t.true(uppercase.error[0].indexOf('uppercase') !== -1)
})

test('max min', t => {
  const max = cris('qaq').max(1)
  const min = cris('qaq').min(5)
  t.true(max.error[0].indexOf('shorter') !== -1)
  t.true(min.error[0].indexOf('longer') !== -1)
})

test('required', t => {
  const required = cris('').required()
  t.true(required.error[0].indexOf('not to be empty') !== -1)
})

test('lt gt', t => {
  const lt = cris(11).lt(10)
  const gt = cris(11).gt(20)
  t.true(lt.error[0].indexOf('less than') !== -1)
  t.true(gt.error[0].indexOf('greater than') !== -1)
})

test('string', t => {
  const string = cris(123).string()
  t.true(string.error[0].indexOf('Expected to be string') !== -1)
})

test('number', t => {
  const number = cris('123').number()
  t.true(number.error[0].indexOf('Expected to be number') !== -1)
})
