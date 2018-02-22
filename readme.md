# Formatter for Fuse js

Small utility that takes an array of a mix of objects and arrays, and returns all of the unique, nested key-strings. This is usesful for tools like Fuse js which use an array of keys to fuzzy search through arrays of objects.

## Example

```js
const fuseFormat = require('fuseFormat')

const data = [
  {
    one: {
      hi: 'does this work',
      there: null
    },
    two : [
      {
        hi: null,
        again: null,
        six: [
          {
            four: {
              five: [
                {
                  imReallyNested: null
                }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    three: null
  },
  {
    one: {
      four: {
        five: {
          six: {
            seven: null,
            eight: [
              {
                hi: ''
              }
            ]
          }
        }
      }
    }
  }
]

fuseFormat(data)

// Returns

[
  'one',
  'one.hi',
  'one.there',
  'two',
  'two.hi',
  'two.again',
  'two.six',
  'two.six.four',
  'two.six.four.five',
  'two.six.four.five.imReallyNested',
  'three',
  'one.four',
  'one.four.five',
  'one.four.five.six',
  'one.four.five.six.seven',
  'one.four.five.six.eight',
  'one.four.five.six.eight.hi'
]
```