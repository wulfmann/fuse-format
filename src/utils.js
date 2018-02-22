'use strict'

const isObject = obj => Object.prototype.toString.call(obj) === '[object Object]'
const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'

const separate = x => x.split('.')

const flatten = (item, result = {}, lastKey = '') => {
  const getNext = key => `${lastKey}${lastKey ? '.' : ''}${key}`

  if (isObject(item)) {
    const keys = Object.keys(item)
    keys.forEach(k => {
      flatten(item[k], result, getNext(k))
    })
  } else if (isArray(item)) {
    item.forEach(el => {
      flatten(el, result, lastKey)
    })
  } else {
    result[lastKey] = item
  }
  return result
}

const expand = arr => {
  return arr.reduce((a, b) => {
    if (a.indexOf(b) == -1 && arr.indexOf(b) === 0) {
      a.push(b)
    } else {
      let last = a.slice(a.length - 1)
      a.push(`${last}.${b}`)
    }
    return a
  }, [])
}

module.exports = {
  separate,
  flatten,
  expand
}
