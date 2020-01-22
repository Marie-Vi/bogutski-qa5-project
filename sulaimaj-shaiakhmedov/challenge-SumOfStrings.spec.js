const { expect } = require('chai');

/*
Sum of two Strings
Сумма двух переменных типа String и number

Description

Создайте переменные типа number 'year' и типа String 'month' и присвойте им значения 2020
и 'January' соответственно.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
let lastYear = 2019;
let previousMonth="December"

```
*/

// Solution
let year=2020;
let month='January';

// Tests

it('Переменная year существует и имеет значение', () => {
  expect(year).not.undefined;
});

it('Переменная month существует и имеет значение', () => {
  expect(month).not.undefined;
});

it('Переменная `year` содержит тип данных number integer', () => {
  expect(year).a('Number');
});

it('Переменная `month` содержит тип данных String', () => {
  expect(month).a('string');
});

it('Значение переменной year содержит значение 2020', () => {
  expect(year).equal(2020);
});

it('Значение переменной month содержит значение \n January', () => {
  expect(month).equal('January');
});

it('Значение суммы переменной year и month содержит пробел и равно January 2020', () => {
  expect(month+" "+year).equal('January 2020');
});
