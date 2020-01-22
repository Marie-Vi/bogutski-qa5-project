const { expect } = require('chai');

/*
Name
Переменная с названием фрукта.

Description

Создайте переменную `berry` и присвойте ей значение 'watermelon'.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const berry = 'watermelon';
```
*/

// Solution
const berry = -8;


// Tests

it('Переменная `berry` существует и содержит тип данных string', () => {
  expect(berry).not.undefined;
});

it('Переменная `fruit` содержит строку', () => {
  expect(berry).a('string');
});

it('Переменная `fruit` содержит watermelon', () => {
  expect(berry).a('watermelon');
});

