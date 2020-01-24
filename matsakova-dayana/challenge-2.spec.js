const { expect } = require('chai');

/*
Name
Переменная с именем актера

Description

Создайте переменную `favoriteCity` и присвойте ей значение `Miami`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const favoriteCity = 'San Francisco';

```
*/

// Solution
const favoriteCity = 'Miami';

// Tests

it('Переменная `favoriteCity` существует и имеет значение', () => {
  expect(favoriteCity).not.undefined;
});

it('Переменная `favoriteCity` содержит тип данных string', () => {
  expect(favoriteCity).a('string');
});

it('Переменная `favoriteCity` содержит значение `Miami` ', () => {
  expect(favoriteCity).eql('Miami');
});



