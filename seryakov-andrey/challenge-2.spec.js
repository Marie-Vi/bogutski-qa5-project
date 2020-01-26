const { expect } = require('chai');

// Name
// Степень числа.

// Description.
// Как  известно, что если любое число возвести в степень 0,  результатом будет 1.
// Давайте проверим данное утверждение.
// Создайте переменную 'number' и присвойте значение -100.
// Создайте переменную 'power' и присвойте ей значение 'number' в степени 0.

//Решение
const number = - 100;
const power = number ** 0;
// Tests

it('Переменная `number` содержит значение', () => {
    expect(number).not.undefined;
});

it('Переменная `number` содержит число', () => {
    expect(number).a('number');
});

it('Переменная `power` содержит значение', () => {
    expect(power).not.undefined;
});

it('Переменная `power` содержит число', () => {
    expect(power).a('number');
});