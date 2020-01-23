const { expect } = require('chai');

/*
Name
Переменная с названием мультфильма

Description

Создайте переменную `cartoon` и присвойте ей значение `Frozen`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const movie = 'Alien';
```
*/

// Solution
const cartoon = 'Frozen';

// Tests

it('Переменная `cartoon` существует и ей присвоено какое-то значение', () => {
  expect(cartoon).not.undefined;
});

it('Переменная `cartoon` содержит строку', () => {
  expect(cartoon).a('string');
});

it('Переменная `cartoon` содержит `Frozen`', () => {
  expect(cartoon).eq('Frozen');
});
