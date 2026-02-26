import states from './src/index.js'

console.assert(states.getAll().length === 50, 'Should have 50 states');
console.assert(states.getAbbreviations().includes('CA'), 'Should include CA');
console.assert(states.getNames().includes('Texas'), 'Should include Texas');
console.assert(states.findByAbbr('ny').name === 'New York', 'findByAbbr case-insensitive');
console.assert(states.findByName('florida').abbr === 'FL', 'findByName case-insensitive');
console.assert(states.findByAbbr('XX') === undefined, 'Should return undefined for unknown abbr');

console.log('All tests passed!');
