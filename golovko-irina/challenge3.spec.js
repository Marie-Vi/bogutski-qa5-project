const { expect } = require('chai');

// Name
// Возведение в положительную степень отрицательного числа

// Синтаксис возведения в степень – две звездочки подряд (**).

// Description
// Каков результат возведения в третью степень числа -30?
// Создайте переменную `number2` и присвойте ей значение -30.
// Создайте переменную `stepen` и присвойте ей значение 3.
// Создайте переменную `result` и присвойте ей значение `number2` в степени `stepen`.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи:

// ```
// const number = 5;
// const cube = 3;
// const result = number ** cube;
// ```;

// Solution
const number2 = -30;
const stepen = 3;
const result = number2 ** stepen;


// Tests

it('Переменная `number2` содержит значение', () => {
    expect(number2).not.undefined;
});

it('Переменная `number2` содержит число', () => {
    expect(number2).a('number');
});

it('Переменная `number2` равна -30', () => {
    expect(number2).eq(-30);
});

it('Переменная `stepen` содержит значение', () => {
    expect(stepen).not.undefined;
});

it('Переменная `stepen` содержит число', () => {
    expect(stepen).a('number');
});

it('Переменная `stepen` равна 3', () => {
    expect(stepen).eq(3);
});

it('Переменная `result` содержит значение', () => {
    expect(result).not.undefined;
});

it('Переменная `result` содержит число', () => {
    expect(result).a('number');
});

it('Переменная `result` равна -27000', () => {
    expect(result).eq(-27000);
});
