'use strict'

const { flatten, separate, expand } = require('./utils')

module.exports = arr => {
  const all = Object.keys(flatten(arr))
    .map(separate)
    .map(split)

  return [...new Set([].concat.apply([], all))]
}
