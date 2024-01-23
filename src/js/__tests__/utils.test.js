import { calcHealthLevel, calcTileType } from '../utils';

test.each(
  [
    {health: 100, lvl: 'high'},
    {health: 50, lvl: 'high'},
    {health: 49, lvl: 'normal'},
    {health: 15, lvl: 'normal'},
    {health: 14, lvl: 'critical'},
  ]
)('test calcHealthLevel with health: $health and expected level: $lvl', ({health, lvl}) => {
  expect(calcHealthLevel(health)).toBe(lvl);
})

test.each([
  [0, 8, 'top-left'],
  [7, 8, 'top-right'],
  [6, 7, 'top-right'],
  [42, 7, 'bottom-left']
])('calcTileType with index: %i, size: %i and required: %s', (index, size, expected) => {
  expect(calcTileType(index, size)).toBe(expected);
})
