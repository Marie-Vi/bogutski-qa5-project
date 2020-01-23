const {expect} = require('chai');

/*
Name
Сумма цифр двухзначного числа

Description
Дано двухзначное число. Найдите сумму его цифр.

Для решения задачи:
Создайте переменную `num` и присвойте ей значение любого положительного двухзначного число от 10 до 99.
Создайте переменную `secondDigit`, присвойте ей выражение, позволяющее
получить вторую цифру числа num (используйте операцию нахождения остатка %).
Создайте переменную `firstDigit`, присвойте ей выражение, позволяющее
получить первую цифру числа num.
Создайте переменную `sum`, присвойте ей значение суммы цифр.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
// Найти последнюю цифру трехзначного числа
const number = 456; //трехзначное число
const a = number % 10; //последняя цифра числа равна отстатку от деления числа на 10
```
*/

// Solution
const num = 34;
const secondDigit = num % 10;
const firstDigit = (num - secondDigit) / 10;
const sum = secondDigit + firstDigit;

// Tests

it('переменная `num` существует и имеет значение', () => {
    expect(num).not.undefined;
});

it('переменная `num` имеет числовой тип', () => {
    expect(num).a('number');
});

it('переменная `num` является положительным двухзначным числом', () => {
    expect(num >= 10 && num <= 99).to.be.true;
});

it('переменная `num` больше или равна 10', () => {
    expect(num).gte(10);
});

it('переменная `num` меньше или равна 99', () => {
    expect(num).lte(99);
});

it('переменная `firstDigit` имеет значение', () => {
    expect(firstDigit).not.undefined;
});

it('переменная `secondDigit` имеет значение', () => {
    expect(secondDigit).not.undefined;
});

it('переменная `firstDigit` вычислена верно', () => {
    let a = +(num + '')[0];
    expect(a).equal(firstDigit);
});

it('переменная `secondDigit` вычислена верно', () => {
    let a = +(num + '')[1];
    expect(a).equal(secondDigit);
});

it('переменная `sum` имеет значение', () => {
    expect(sum).not.undefined;
});

it('переменная `sum` равна сумме цифр числа', () => {
    expect(sum).equal(firstDigit + secondDigit);
});


