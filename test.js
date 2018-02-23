'use strict'

// Include the compiled library
const fuseFormat = require('./src')

// Import some data
const { arrayExample, objectExample } = require('./examples/data')
const data = { oh: [ { hai: { mark: null } } ] }

const datat = {
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

// Run it!
const result = fuseFormat(datat, {
	includeIndexes: false,
	exclude: 'deeply.nested',
	depth: 25
})


console.log(result)
