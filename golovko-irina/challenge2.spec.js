const { expect } = require('chai');

// Name
// Возведение в нулевую степень

// Любое число, возведенное в степень 0, равно 1.

// Description
// Каков результат возведения в нулевую степень числа 101?

// Создайте переменную `number1` и присвойте ей значение 101.
// Создайте переменную `power1` и присвойте ей значение 0.
// Создайте переменную `result` и присвойте ей значение number1 в степени power1.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи:

// ```
// const number = 5;
// const stepen = 1;
// const result = number ** stepen;
// ```;

// Solution
const number1 = 101;
const power1 = 0;
const result = number1 ** power1;


// Tests
//................number1.............................
it('Переменная `number1` содержит значение', () => {
    expect(number1).not.undefined;
});

it('Переменная `number1` содержит число', () => {
    expect(number1).a('number');
});

it('Переменная `number1` равна 101', () => {
    expect(number1).eq(101);
});

//................power1.............................
it('Переменная `power1` содержит значение', () => {
    expect(power1).not.undefined;
});

it('Переменная `power1` содержит число', () => {
    expect(power1).a('number');
});

it('Переменная `power1` равна 0', () => {
    expect(power1).eq(0);
});

//................result.............................
it('Переменная `result` содержит значение', () => {
    expect(result).not.undefined;
});

it('Переменная `result` содержит число', () => {
    expect(result).a('number');
});

it('Переменная `result` равна 1', () => {
    expect(result).eq(1);
});
