import Cris from './cris'

const wrap = Fn => value => new Fn(value)

export default wrap(Cris)
