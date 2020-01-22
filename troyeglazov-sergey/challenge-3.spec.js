const { expect } = require('chai');

/*
Name
Подсчитать текущий баланс


Description

Создайте две переменные  `income` и `expenses` (доходы и расходы).
Затем создайте переменную `balance` которая будет подсчитывать остаток (со знаком
предпочитаемой валюты перед ней, через пробел).

Приведем пример, который принципиально похож на то что нужно сделать:

```
const money = 1000;
const balance = '$' + (money - 500);
``

*/

// Solution
const income = 5000;
const expenses = 3000;
const balance = '$ ' + (income - expenses);

// Tests
it('переменная `income` существует',  () => {
  expect(income).not.undefined;
});

it('переменная `expenses` существует',  () => {
  expect(expenses).not.undefined;
});

it('переменная `balance` существует',  () => {
  expect(balance).not.undefined;
});

it('переменная `income` является числом',  () => {
  expect(income).a('number');
});

it('переменная `expenses` является числом',  () => {
  expect(expenses).a('number');
});

it('переменная `balance` равна разнице `income` и `expenses`',  () => {
  expect(income - expenses).eq(+balance.split(' ')[1]);
});

it('переменная `balance` является строкой',  () => {
  expect(balance).a('string');
});
