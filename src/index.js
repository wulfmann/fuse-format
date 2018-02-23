'use strict'

import la from 'lazy-ass'

import { is, flatten } from './utils'

const debug = require('debug')('fuse-format')

module.exports = (src, config) => {
  debug('Source: ', src)
  debug('Config: ', config)

  la((is.object(src) || is.array(src)), 'Source must be Array or Object: ', src)

  const flattenedSource = flatten(src, config)
  debug('Result : ', flattenedSource)

  return Object.keys(flattenedSource)
}
