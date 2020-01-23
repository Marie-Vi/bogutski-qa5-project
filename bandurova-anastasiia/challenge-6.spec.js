const { expect } = require('chai');

/*
Name
Переменная с названием фрукта

Description

Создайте переменную `fruit` и присвойте ей значение `mango`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const vegetable = 'tomato';
```
*/

// Solution
const fruit = 'mango';

// Tests

it('Переменная `fruit` существует и содержит тип данных string', () => {
  expect(fruit).not.undefined;
});

it('Переменная `fruit` содержит строку', () => {
  expect(fruit).a('string');
});

it('Переменная `fruit` содержит `mango`', () => {
  expect(fruit).eq('mango');
});
