const { expect } = require('chai');

/*
Name
Подсчитать текущий баланс


Description

Создайте две переменные `income` и `expenses` (доходы и расходы).
Затем создайте переменную `balance` которая будет подсчитывать остаток (со знаком
предпочитаемой валюты перед ней, через пробел).

Приведем пример, который принципиально похож на то что нужно сделать:

```

const profit = 5000;
const outlay = 3000;
const onHands = `$ ${profit - outlay}`;

``

*/

// Solution
const income = 5000;
const expenses = 3000;
const balance = `$ ${income - expenses}`;

// Tests
it('Переменная `income` существует',  () => {
  expect(income).not.undefined;
});

it('Переменная `expenses` существует',  () => {
  expect(expenses).not.undefined;
});

it('Переменная `balance` существует',  () => {
  expect(balance).not.undefined;
});

it('Переменная `income` является числом',  () => {
  expect(income).a('number');
});

it('Переменная `expenses` является числом',  () => {
  expect(expenses).a('number');
});

it('Переменная `balance` является строкой',  () => {
  expect(balance).a('string');
});

it('Переменная `balance` равна разнице `income` и `expenses` со знаком доллара',  () => {
  expect(balance).eq(`$ ${income - expenses}`);
});
