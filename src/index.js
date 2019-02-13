'use strict'

import { is, flatten } from './utils'

export default (src, config) => {
  if (!is.object(src) && !is.array(src)) {
    throw new Error('Source must be Array or Object')
  }

  const flattened = flatten(src, config)

  return Object.keys(flattened)
}
