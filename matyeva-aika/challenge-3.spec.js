const { expect } = require('chai');

/*
Name
Переменная с именем победителя Оскара

Description

Создайте переменную `oscarWinner` с именем победителя Оскара и присвойте ей значение `Leonardo Di Caprio`.


Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const grammyWinner = 'Lady Gaga';

```
*/


// Solution
const oscarWinner = 'Leonardo Di Caprio';

// Tests

it('Переменная `oscarWinner` содержит значение', () => {
  expect(oscarWinner).not.undefined;
});

it('Тип данных `oscarWinner` строка', () => {
  expect(oscarWinner).a('string');
});

it('Переменная `oscarWinner` содержит Leonardo Di Caprio', () => {
  expect(oscarWinner).eq('Leonardo Di Caprio');
});
