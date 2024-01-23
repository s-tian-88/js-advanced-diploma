import { calcHealthLevel, calcTileType } from '../utils';

test.each(
  [
    {health: 100, lvl: 'hight'},
    {health: 49, lvl: 'normal'},
    {health: 14, lvl: 'critical'},
  ]
)('test calcHealthLevel with health: %health and expected level: %lvl', (health, lvl) => {
  expect(calcHealthLevel(health)).toBe(lvl);
})
