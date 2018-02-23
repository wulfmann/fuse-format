'use strict'

import { is, flatten } from './utils'

const debug = require('debug')('fuse-format')

module.exports = (src, config) => {
  debug('Source: ', src)
  debug('Config: ', config)

  if(!is.object(src) || !is.array(src)) {
    console.log(src)
    throw new Error('Source must be Array or Object')
  }

  const flattenedSource = flatten(src, config)
  debug('Result : ', flattenedSource)

  return Object.keys(flattenedSource)
}
