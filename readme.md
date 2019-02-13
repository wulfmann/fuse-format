# Formatter for Fuse js

Small utility that takes an array or an object, and returns an array of 'key-strings' for each path in the item. This is useful for libraries like Fusejs that require an array of keys for the fuzzy search.

## Install

[![npm version](https://badge.fury.io/js/fuse-format.svg)](https://badge.fury.io/js/fuse-format)

```js
npm i fuseFormat --save
```

## Include
Include package at the top of your project.

```js
const fuseFormat = require('fuseFormat')
```

or

```js
import fuseFormat from 'fuseFormat'
```

## Options
A few options are available to you to tweak your response.

Key | Type | Default
--- | --- | ---
includeIndexes | boolean | false
exclude | string || boolean | `null`
depth | integer | 3


##### includeIndexes
```includeIndexes``` sets whether or not to include the array index in the result keystring.

Example:

```js
const data = [ { iHaveAnArray: [ { hello: 'there' } ] } ]

fuseFormat(data, { includeIndexes: true })

// returns [ '0.iHaveAnArray', '0.iHaveAnArray.0.hello' ]

```

##### exclude
```exclude``` accepts either a string or an array of strings of keys or patterns that you would like to exclude from the results.

Example: 

```js
const data = { oh: [ { hai: { mark: '' } } ] }

fuseFormat(data, { exclude: 'mark' })

// returns ['oh', 'oh.hai']
```

Make sure you know what you are excluding because it works from the top down. For example:

```js

const data = {
  i: {
    am: {
      deeply: {
        nested: [
          {
            hi: ''
          }
        ]
      }
    }
  }
}

fuseFormat(data, { exclude: ['am'] })

// returns ['i']
```

Pattern Example:

```js
const data = {
  i: {
    am: {
      deeply: {
        nested: [
          {
            hi: ''
          }
        ]
      }
    }
  },
  so: {
    i: {
      am: null
    }
  }
}

fuseFormat(data, exclude: ['deeply.nested'])

// returns ['i', 'i.am', 'i.am.deeply', 'so', 'so.i', 'so.i.am']
```


##### depth
```depth``` accepts an integer and sets how deep to traverse the source.

Example:

```js
const data = {
  i: {
    am: {
      deeply: {
        nested: [
          {
            hi: ''
          }
        ]
      }
    }
  }
}

fuseFormat(data, { depth: 2 })

// returns ['i', 'i.am']

```

## Examples
More examples can be found in the examples folder the repo on: [Github]

## Development
PR's are welcome from any level.


[Github]: https://github.com/wulfmann/fuse-format