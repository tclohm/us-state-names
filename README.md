# @tclohm/us-states

A lightweight Node.js module for working with US state names and abbreviations.

## Installation

```bash
npm install @tclohm/us-states
```

## Usage

```js
import states from '@tclohm/us-states';

// Get all states as { abbr, name } objects
states.getAll();
// => [{ abbr: 'AL', name: 'Alabama' }, ...]

// Get all two-letter abbreviations
states.getAbbreviations();
// => ['AL', 'AK', 'AZ', ...]

// Get all full names
states.getNames();
// => ['Alabama', 'Alaska', 'Arizona', ...]

// Look up by abbreviation (case-insensitive)
states.findByAbbr('CA');
// => { abbr: 'CA', name: 'California' }

// Look up by name (case-insensitive)
states.findByName('texas');
// => { abbr: 'TX', name: 'Texas' }
```

## API

| Method | Returns | Description |
|--------|---------|-------------|
| `getAll()` | `Array<{abbr, name}>` | All 50 states |
| `getAbbreviations()` | `string[]` | Two-letter codes only |
| `getNames()` | `string[]` | Full names only |
| `findByAbbr(abbr)` | `{abbr, name} \| undefined` | Lookup by abbreviation |
| `findByName(name)` | `{abbr, name} \| undefined` | Lookup by full name |
