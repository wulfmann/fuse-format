import fuseformat from '../src/index'
import { nestedArray } from './data'

test('it fails if source is not an object or array', () => {
    expect(() => fuseformat('test')).toThrow()
    expect(() => fuseformat(1)).toThrow()
    expect(() => fuseformat(null)).toThrow()
    expect(() => fuseformat(undefined)).toThrow()
})

test('it fails if exclude option is not an object or array', () => {
    expect(() => fuseformat([{ test: '' }], { exclude: {} })).toThrow()
})