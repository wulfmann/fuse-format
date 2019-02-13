import { flatten } from '../src/utils'
import { arr, nestedArray, obj, nestedObject, multiNested } from './data'

test('it flattens an array', () => {
    const result = flatten(arr)
    expect(Object.keys(result)).toEqual(['']);
})

test('it flattens a nested array', () => {
    const result = flatten(nestedArray)
    expect(Object.keys(result)).toEqual(['hello']);
})

test('it flattens an object', () => {
    const result = flatten(obj)
    expect(Object.keys(result)).toEqual(['hello']);
})

test('it flattens a nested object', () => {
    const result = flatten(nestedObject)
    expect(Object.keys(result)).toEqual(['oh', 'oh.hello', 'oh.hello.there']);
})

test('it flattens a nested mix of arrays and objects', () => {
    const result = flatten(multiNested)
    expect(Object.keys(result)).toEqual([
        'its',
        'its.bullshit',
        'its.bullshit.i',
        'its.did',
        'its.did.not',
        'its.did.not.hit',
        'her',
        'her.i',
        'her.i.there',
        'her.i.did',
        'her.i.did.not',
        'her.i.did.not.oh',
        'her.i.did.not.oh.hi',
        'her.i.did.not.oh.hi.mark'
    ]);
})