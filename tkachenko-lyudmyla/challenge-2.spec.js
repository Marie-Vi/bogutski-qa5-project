const { expect } = require('chai');

//Name
//Зарплата за первый рабочий месяц

//Description
//При устройстве на следующую работу вам предложили 75 долларов в час. Какую сумму вы заработаете за свой первый рабочий месяц?
//Создайте переменную `salary` и присвойте ей значение 75
//Создайте переменную `hours` и присвойте ей значение 8
//Создайте переменную `days` и присвойте ей значение 21 (количество рабочих дней)
//Создайте переменную `monthSalary`, в которую верните результат заработанных вами денег за месяц.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи

// ```
// const lessons = 12;
// const months = 3;
// const  class = lessons * months;
// ```;

//Solution
const salary = 75;
const hours = 8;
const days = 21;
const monthSalary = salary * hours * days;


// Tests
it('Переменная `salary` существует и содержит значение', () => {
    expect(salary).not.undefined;
});

it('Переменная `hours` существует и содержит значение', () => {
    expect(hours).not.undefined;
});

it('Переменная `days` существует и содержит значение', () => {
    expect(days).not.undefined;
});

it('Значение переменной `salary` - число', () => {
    expect(salary).a('number');
});

it('Значение переменной `hours` - число', () => {
    expect(hours).a('number');
});

it('Значение переменной `days` - число', () => {
    expect(days).a('number');
});

it('Результат переменной `monthSalary` равен числу 12600', () => {
    expect(monthSalary).eq(12600);
});

