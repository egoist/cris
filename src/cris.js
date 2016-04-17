export default class Cris {
  constructor(value) {
    this.value = value
  }
  string() {
    if (!isEmpty(this.value) && typeof this.value !== 'string') {
      this.error = pushError(this.error, 'Expected to be string')
    }
    return this
  }
  number() {
    if (typeof this.value !== 'number') {
      this.error = pushError(this.error, 'Expected to be number')
    }
    return this
  }
  min(length) {
    if (this.value.length < length) {
      this.error = pushError(this.error, `Expected to be longer than ${length}`)
    }
    return this
  }
  max(length) {
    if (this.value.length > length) {
      this.error = pushError(this.error, `Expected to be shorter than ${length}`)
    }
    return this
  }
  gt(number) {
    if (typeof this.value === 'number' && this.value <= number) {
      this.error = pushError(this.error, `Exptected to be greater than ${number}`)
    }
    return this
  }
  lt(number) {
    if (typeof this.value === 'number' && this.value >= number) {
      this.error = pushError(this.error, `Exptected to be less than ${number}`)
    }
    return this
  }
  required() {
    if (isEmpty(this.value)) {
      this.error = pushError(this.error, 'Expected not to be empty')
    }
    return this
  }
  lowercase() {
    if (typeof this.value === 'string' && this.value.toLowerCase() !== this.value) {
      this.error = pushError(this.error, 'Expected to be lowercased string')
    }
    return this
  }
  uppercase() {
    if (typeof this.value === 'string' && this.value.toUpperCase() !== this.value) {
      this.error = pushError(this.error, 'Expected to be uppercased string')
    }
    return this
  }
}

function isEmpty(value) {
  return value === null || value === '' || value === undefined
}

function pushError(obj, message) {
  obj = obj || []
  obj.push(message)
  return obj
}
