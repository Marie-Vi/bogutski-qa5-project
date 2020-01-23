const {expect} = require('chai');

/*
Sum of two Strings
Сумма двух значений типа string и number
Тема: Конкатенация переменных

Description

Создайте переменную `year` и  `month`.
Присвойте переменной `year` значение 2020 типа Number
и переменной `month' значение текущего месяца 'January' типа String.
Сложите две переменные, добавив пробел между ними, получив 'January 2020'.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
let lastYear = 2019;
let previousMonth = 'December';
lastYear + " " + previousMonth = 'December 2019';

```
*/

// Solution

let year = 2020;
let month = 'January';
console.log(year + " " + month);

// Tests

it('Переменная `year` существует и имеет присовенное значение', () => {
    expect(year).not.undefined;
});

it('Переменная `month` существует и имеет присвоенное значение', () => {
    expect(month).not.undefined;
});

it('Переменная `year` содержит тип данных Number integer', () => {
    expect(year).a('number');
});

it('Переменная `month` содержит тип данных String', () => {
    expect(month).a('string');
});

it('Значение переменной `year` содержит заданное значение 2020', () => {
    expect(year).equal(2020);
});

it('Значение переменной `month` содержит заданное значение \n January', () => {
    expect(month).equal('January');
});

it('Значение сложения переменной `year` и `month` содержит пробел между ними и равно January 2020', () => {
    expect(month + " " + year).equal('January 2020');
});
