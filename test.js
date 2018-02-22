const fuseFormat = require('./src/index')

const data = [
  {
    one: {
      hi: 'does this work',
      there: null
    },
    two: [
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

console.log(fuseFormat(data))