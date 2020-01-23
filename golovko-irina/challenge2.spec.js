const { expect } = require('chai');

// Name
// Возведение в нулевую степень

// Любое число, возведенное в степень 0, равно 1.

// Description
// Каков результат возведения в нулевую степень числа 101?

// Создайте переменную `number` и присвойте ей значение 101.
// Создайте переменную `power` и присвойте ей значение 0.
// Создайте переменную `result` и присвойте ей значение `number` в степени `power`.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи:

// ```
// const number = 5;
// const stepen = 1;
// const result = number ** stepen;
// ```;

// Solution
const number = 101;
const power = 0;
const result = number ** power;


// Tests

it('Переменная `number` содержит значение', () => {
    expect(number).not.undefined;
});

it('Переменная `number` содержит число', () => {
    expect(number).a('number');
});

it('Переменная `number` равна 101', () => {
    expect(number).eq(101);
});

it('Переменная `power` содержит значение', () => {
    expect(power).not.undefined;
});

it('Переменная `power` содержит число', () => {
    expect(power).a('number');
});

it('Переменная `power` равна 0', () => {
    expect(power).eq(0);
});

it('Переменная `result` содержит значение', () => {
    expect(result).not.undefined;
});

it('Переменная `result` содержит число', () => {
    expect(result).a('number');
});

it('Переменная `result` равна 1', () => {
    expect(result).eq(1);
});
