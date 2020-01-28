const { expect } = require('chai');

/*
Name
Переменная с названием фрукта

Description

Создайте переменную `fruit` и присвойте ей значение `Mango`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const vegetable = 'Tomato';
```
*/

// Solution
const fruit = 'Mango';

// Tests

it('Переменная `fruit` существует и содержит тип данных string', () => {
  expect(fruit).not.undefined;
});

it('Переменная `fruit` содержит строку', () => {
  expect(fruit).a('string');
});

it('Переменная `fruit` содержит `Mango`', () => {
  expect(fruit).eq('Mango');
});
