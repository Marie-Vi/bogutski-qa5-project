const { expect } = require('chai');

/*
Berry
Переменная с названием ягоды.

Description

Создайте переменную `berry` и присвойте ей значение 'watermelon'.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const berry = 'watermelon';
```
*/

// Solution
const berry = 'Strawberry';
 

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

