const fuseFormat = require('./lib')

const data = {
  hi: {
    one: {
      hi: 'does this work',
      there: null
    },
    two: [{ six: [{ four: null }] }]
  },
  again: {
    three: {
      iam: 'really',
      nested: null
    }
  }
}

const result = fuseFormat(data)

console.log(result)
