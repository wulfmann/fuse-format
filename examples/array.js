const fuseFormat = require('./lib')

const data = [
  {
    one: {
      hi: 'does this work',
      there: null
    },
    two: [{ six: [{ four: null }] }]
  },
  {
    three: {
      iam: 'really',
      nested: []
    }
  }
]

const result = fuseFormat(data)

console.log(result)
