const { expect } = require('chai');

/*
Name
Переменная с именем героя.

Description

Создайте переменную `cigaretteName` и присвойте ей 'James Bond'

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const name = 'Sponge Bob';
```
*/

// Solution
const cigaretteName = 'James Bond';

// Tests

it('Переменная `cigaretteName` существует и имеет значение', () => {
  expect(cigaretteName).not.undefined;
});

it('Переменная `cigaretteName` содержит тип данных string', () => {
  expect(cigaretteName).a('string');
});

it('Переменная `cigaretteName` содержит значение James Bond', () => {
  expect(level1).get('James Bond');
});


