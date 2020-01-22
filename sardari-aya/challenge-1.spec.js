const { expect } = require('chai');

/*
junkFood
Переменная с именем собаки, которую можно приготовить на гриле.

Description

Создайте переменную `junkFood` и присвойте ей 'James Bond'

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const junkFood = 'Hot-dog';
```
*/

// Solution
const junkFood = 'BBQ';

// Tests

it('Переменная `junkFood` существует и имеет значение', () => {
  expect(junkFood).not.undefined;
});

it('Переменная `junkFood` содержит тип данных string', () => {
  expect(junkFood).a('string');
});

it('Переменная `junkFood` содержит значение Hot-dog', () => {
  expect(junkFood).get('Hot-dog');
});


