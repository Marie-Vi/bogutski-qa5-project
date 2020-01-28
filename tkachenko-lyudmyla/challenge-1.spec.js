const { expect } = require('chai');

/*
Name
Зарплата за первый рабочий день

Description
При устройстве на работу вам предложили зарплату `N` долларов в час.
Какую сумму вы заработаете за свой первый рабочий день если проработаете 8 часов?

Создайте переменную `hourRate` и присвойте ей значение, которое хотели бы зарабатывать в час.
Создайте переменную `dayHours` и присвойте ей значение часов,
которое хотели бы работать в день, но не больше 8.
Создайте переменную `daySalary` и рассчитайте в ней результат заработанных вами денег за день.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи

```
const months = 12;
const years = 25;
const myAgeInMonths = months * years;
```

*/

//Solution
const hourRate = 70;
const dayHours = 8;
const daySalary = hourRate * dayHours;

// Tests
it('Переменная `hourRate` существует и содержит значение', () => {
  expect(hourRate).not.to.be.undefined;
});

it('Значение переменной `hourRate` - число', () => {
  expect(hourRate).a('number');
});

it('Переменная `dayHours` существует и содержит значение', () => {
  expect(dayHours).not.to.be.undefined;
});

it('Значение переменной `dayHours` - число', () => {
  expect(dayHours).a('number');
});

it('Значение переменной `dayHours` меньше или равно 8', () => {
  expect(dayHours).lte(8);
});

it('Результат переменной `daySalary` равен произведению hourRate и dayHours', () => {
  expect(daySalary).eq(hourRate * dayHours);
});

