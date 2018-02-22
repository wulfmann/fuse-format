const fuseFormat = require('./src/index')
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

console.log(fuseFormat(data))