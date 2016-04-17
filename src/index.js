import Cris from './cris'

const wrap = Fn => (value, opts) => new Fn(value, opts)

export default wrap(Cris)
