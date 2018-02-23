import fuseFormat from './index.js'

const data = {
  hi: {
    one: {
      hi: 'does this work',
      there: null
    },
    two: [
      {
        six: [
          { four: null },
          { five: '' }
        ]
      }
    ]
  },
  again: {
    three: {
      iam: 'really',
      nested: null
    }
  }
}

const result = fuseFormat(data, {
  includeIndexes: false,
  exclude: []
})

// console.log('Try running some tests in the src/test.js file!')
console.log(result)

