const { expect } = require('chai');

/*
Name
Переменная с именем актера

Description

Создайте переменную `actorName` и присвойте ей значение `Brad Pitt`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const actorName = 'Leonardo DiCaprio';

```
*/

// Solution
const actorName = 'Brad Pitt';

// Tests

it('Переменная `actorName` существует и имеет значение', () => {
  expect(actorName).not.undefined;
});

it('Переменная `actorName` содержит тип данных string', () => {
  expect(actorName).a('string');
});

it('Переменная `actorName` содержит значение `Brad Pitt` ', () => {
  expect(actorName).eql('Brad Pitt');
});

