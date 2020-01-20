const { expect } = require('chai');

// Name
// Возведение в положительную степень положительного числа

// Синтаксис возведения в степень – две звездочки подряд (**).
// Пример: 10 в пятой степени (10^5) записывается так:
// 10 ** 5;
// 100000

// Description
// Каков результат возведения в пятую степень числа 10?
// Создайте переменную `number` и присвойте ей значение 10.
// Создайте переменную `power` и присвойте ей значение 5.
// Создайте переменную `result` и присвойте ей значение `number` в степени `power`.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи:

// ```
// const number = 5;
// const cube = 3;
// const result = number ** cube;
// ```;

// Solution
const number = 10;
const power = 5;
const result = number ** power;


// Tests

it('Переменная `number` содержит значение', () => {
    expect(number).not.undefined;
});

it('Переменная `number` содержит число', () => {
    expect(number).a('number');
});

it('Переменная `number` равна 10', () => {
    expect(number).eq(10);
});

it('Переменная `power` содержит значение', () => {
    expect(power).not.undefined;
});

it('Переменная `power` содержит число', () => {
    expect(power).a('number');
});

it('Переменная `power` равна 5', () => {
    expect(power).eq(5);
});

it('Переменная `result` содержит значение', () => {
    expect(result).not.undefined;
});

it('Переменная `result` содержит число', () => {
    expect(result).a('number');
});

it('Переменная `result` равна 100000', () => {
    expect(result).eq(100000);
});
