const { expect } = require('chai');

//Name
//Зарплата за первый рабочий день

//Description
//При устройстве на следующую работу вам предложили 70 долларов в час. Какую сумму вы заработаете за свой первый рабочий день?
//Создайте переменную `salary` и присвойте ей значение 70
//Создайте переменную `hours` и присвойте ей значение 8
//Создайте переменную `daySalary` и верните результат заработанных вами денег за день.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи

// ```
// const months = 12;
// const years = 25;
// const myAge = months * years;
// ```;

//Solution
const salary = 70;
const hours = 8;
const daySalary = salary * hours;

// Tests
it('Переменная `salary` существует и содержит значение', () => {
  expect(salary).not.to.be.undefined;
});

it('Переменная `hours` существует и содержит значение', () => {
  expect(hours).not.to.be.undefined;
});

it('Значение переменной `salary` - число', () => {
  expect(salary).a('number');
});

it('Значение переменной `hours` - число', () => {
  expect(hours).a('number');
});

it('Результат переменной `daySalary` равен числу 560', () => {
  expect(daySalary).eq(560);
});

