const { expect } = require('chai');

/*
Name
Переменная с названием фильма

Description

Создайте переменную `movie` и присвойте ей значение `Once upon in Hollywood`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const movie = 'Green Book';

```
*/

// Solution
const movie = 'Once upon in Hollywood';

// Tests

it('Переменная `movie` существует и имеет значение', () => {
  expect(movie).not.undefined;
});

it('Переменная `movie` содержит тип данных string', () => {
  expect(movie).a('string');
});

it('Переменная `movie` содержит значение `Once upon in Hollywood` ', () => {
  expect(movie).eql('Once upon in Hollywood');
});

