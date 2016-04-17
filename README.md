# cris [![NPM version](https://img.shields.io/npm/v/cris.svg)](https://npmjs.com/package/cris) [![NPM downloads](https://img.shields.io/npm/dm/cris.svg)](https://npmjs.com/package/cris) [![Build Status](https://img.shields.io/circleci/project/egoist/cris/master.svg)](https://circleci.com/gh/egoist/cris) [![Coveralls branch](https://img.shields.io/coveralls/egoist/cris/master.svg?maxAge=2592000)](https://github.com/egoist/cris)

> JavaScript data validation library.

## Install

```bash
$ npm install --save cris
```

## Usage

```js
const cris = require('cris')

cris('iPhone').string().max(3).lowercase().required()
/**
{
  value: 'iPhone',
  error: [
    'Expected to be shorter than 3',
    'Expected to be lowercased string' 
  ] 
}
*/
```

## License

MIT © [EGOIST](https://github.com/egoist)
