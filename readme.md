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

## Examples
### Array Example

```js
const fuseFormat = require('fuseFormat')

const data = [
  {
    one: {
      hi: 'does this work',
      there: null
    },
    two : [ { six: [ { four: null } ] } ]
  },
  {
    three: {
      iam: 'really',
      nested: null
    }
  }
]

fuseFormat(data)
```

This returns:


```js
[
  'one',
  'one.hi',
  'one.there',
  'two',
  'two.six',
  'two.six.four',
  'three',
  'three.iam',
  'three.nested'
]
```

### Object Example

```js
const fuseFormat = require('fuseFormat')

const data = {
  hi: {
    one: {
      hi: 'does this work',
      there: null
    },
    two : [ { six: [ { four: null } ] } ]
  },
  again: {
    three: {
      iam: 'really',
      nested: null
    }
  }
}

fuseFormat(data)
```

This returns:

```js
[
  'hi',
  'hi.one',
  'hi.one.hi',
  'hi.one.there',
  'hi.two',
  'hi.two.six',
  'hi.two.six.four',
  'again',
  'again.three',
  'again.three.iam',
  'again.three.nested'
]
```