import fuseformat from '../src/index'
import { multiNested, nestedArray } from './data'

test('it includes array indexes', () => {
    const result = fuseformat(nestedArray, { includeIndexes: true })
    expect(result).toEqual(['0.hello']);
})

test('it excludes a pattern', () => {
    expect(fuseformat(multiNested, { exclude: 'her' })).toEqual([
        'its',
        'its.bullshit',
        'its.bullshit.i',
        'its.did',
        'its.did.not',
        'its.did.not.hit'
    ])
})

test('it restricts the depth', () => {
    expect(fuseformat(multiNested, { depth: 3 })).toEqual([
        'its',
        'its.bullshit',
        'its.bullshit.i',
        'its.did',
        'its.did.not',
        'her',
        'her.i',
        'her.i.there',
        'her.i.did'
    ])

    expect(fuseformat(multiNested, { depth: 2 })).toEqual([
        'its',
        'its.bullshit',
        'its.did',
        'her',
        'her.i'
    ])
})