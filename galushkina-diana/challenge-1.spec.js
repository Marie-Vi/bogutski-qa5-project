const { expect } = require('chai');

/*
Name
Переменная с названием банка.

Description

Создайте переменную `bank` и присвойте ей значение `Happy Bank`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const bank = 'The Best Bank';
```
*/

// Solution
const bank = 'Happy Bank';

// Tests

it('Переменная `bank` существует и содержит тип данных string', () => {
  expect(bank).not.undefined;
});

it('Переменная `bank` содержит строку', () => {
  expect(bank).a('string');
});

it('Переменная `bank` содержит `Happy Bank`', () => {
  expect(bank).eq('Happy Bank');
});



