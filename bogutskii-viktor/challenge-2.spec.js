const { expect } = require('chai');

/*
Name
Больше, чем предыдущая в 7 раз.

Description

Создайте переменную `level1` и присвойте ей любое число от -10 до -5.
Создайте вторую переменную `levelUp`, которая будет использовать
значение переменной `level1`, то есть переменная `levelUp` будет в 7 раз больше чем `level1`

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const before = -2;
const after = before * 4;
```
*/

// Solution
const level1 = -8;
const levelUp = level1 * 7;

// Tests

it('Переменная `level1` содержит значение', () => {
  expect(level1).not.undefined;
});

it('Переменная `level1` содержит число', () => {
  expect(level1).a('number');
});

it('Переменная `level1` больше чем -10', () => {
  expect(level1).gte(-10);
});

it('Переменная `level1` меньше чем -5', () => {
  expect(level1).lte(-5);
});

it('Переменная `levelUp` содержит значение', () => {
  expect(levelUp).not.undefined;
});

it('Переменная `levelUp` содержит число', () => {
  expect(levelUp).a('number');
});

it('Переменная `levelUp` больше чем `level1` в 7 раз', () => {
  expect(level1 * 7).eq(levelUp);
});
