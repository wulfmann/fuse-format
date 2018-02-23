'use strict'

// Type Checking
export const is = {
  object: src => Object.prototype.toString.call(src) === '[object Object]',
  array: src => Object.prototype.toString.call(src) === '[object Array]'
}

const getNext = (last, current) => `${last}${last ? '.' : ''}${current}`

// Default Configuration
const defaults = {
  includeIndexes: false,
  exclude: null,
  depth: 3
}

export const flatten = (item, config, result = {}, last = '', count = 0) => {
  /*
  ** Merge defaults with passed configuration.
  */

  const settings = Object.assign({}, defaults, config)

  console.log(count)

  /*
  ** If the depth has been reached,
  ** return.
  */

  if (count >= settings.depth) {
    return
  }
  

  if (is.object(item)) {
    /*
    ** If the item is an object, first
    ** convert the keys of the item to an array.
    */

    const keys = Object.keys(item)

    keys.forEach(k => {
      const current = getNext(last, k)

      /*
      ** If the current item is in the 'excludes' list.
      ** Skip it, and go to the next key.
      */

      if (settings.exclude && settings.exclude.includes(current)) {
        return
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

      let keystring = settings.includeIndexes ? getNext(last, item.indexOf(el)) : last
      let counted = settings.includeIndexes ? count + 1 : count

      /*
      ** Recurse through each object in the array
      */

      flatten(el, config, result, keystring, counted)
    })
  } else {
    /*
    ** We've hit the end of a path,
    ** add the current item to the result
    ** object.
    */

    result[last] = item
  }

  return result
}
