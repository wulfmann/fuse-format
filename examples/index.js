'use strict'

// Include the compiled library
const fuseFormat = require('../lib')

// Import some data
const { arrayExample, objectExample } = require('./data')

// Run it!
const result = fuseFormat(arrayExample)
console.log(result)
