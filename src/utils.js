'use strict'

// Type Checking
export const is = {
  object: src => Object.prototype.toString.call(src) === '[object Object]',
  array: src => Object.prototype.toString.call(src) === '[object Array]',
  string: src => typeof src === 'string'
}

const getNext = (last, current) => `${last}${last ? '.' : ''}${current}`
const getLast = arr => arr.slice(arr.length - 1)[0]

// Default Configuration
const defaults = {
  includeIndexes: false,
  exclude: null,
  depth: 25
}

export const flatten = (item, config, result = {}, last = '', count = 0) => {
  const { includeIndexes, exclude, depth } = Object.assign({}, defaults, config)

  if (count >= depth) { return }

  if (is.object(item)) {
    const keys = Object.keys(item)

    keys.forEach(k => {
      const current = getNext(last, k)

      /*
      ** If the current item is in the 'excludes' list.
      ** Skip it, and go to the next key.
      */

      if (exclude) {
        if (!is.string(exclude) && !is.array(exclude)) {
          throw new Error('exclude option must be array or string')
        }

        const lastString = last.split('.')
        const lastWord = getLast(lastString)

        const pattern = `${lastWord}.${k}`

        if (is.string(exclude) && (exclude === k || exclude === pattern)) {
          return
        }

        if (is.array(exclude) && (exclude.indexOf(k) !== -1 || exclude.indexOf(pattern) !== -1)) {
          return
        }
      }

      /*
      ** Add the current object to the path.
      */

      result[current] = item

      /*
      ** Recurse through each key in the current object.
      */

      flatten(item[k], config, result, current, count + 1)
    })
  } else if (is.array(item)) {
    /*
    ** If the item is an array,
    ** recurse into the arrays contents.
    */

    item.forEach(el => {
      /*
      ** If the includeIndexes option is selected
      ** the index of the object within the current
      ** array will be added to the string. Otherwise,
      ** the array will be entered without adding the
      ** index.
      */

      let keystring = includeIndexes ? getNext(last, item.indexOf(el)) : last
      let counted = includeIndexes ? count + 1 : count

      /*
      ** Recurse through each object in the array
      */

      flatten(el, config, result, keystring, counted)
    })
  } else {
    result[last] = item
  }

  return result
}
