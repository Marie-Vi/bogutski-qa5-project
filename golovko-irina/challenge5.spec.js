const { expect } = require('chai');

// Name
// Возведение в степень

// Синтаксис возведения в степень – две звездочки подряд (**).

// Description
// В одной минуте 60 секунд. В одном часе 60 минут.
// Найдите количество секунд в 1 часе с использованием оператора возведения в степень.
// Создайте переменную `seconds` и присвойте ей значение 60.
// Создайте переменную `power` и присвойте ей значение 2.
// Создайте переменную `result` и присвойте ей значение `seconds` в степени `power`.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи:

// ```
// const number = 5;
// const cube = 3;
// const result = n ** cube;
// ```;

// Solution
const seconds = 60;
const power = 2;
const result = seconds ** power;


// Tests
it('Переменная `seconds` содержит значение', () => {
    expect(seconds).not.undefined;
});

it('Переменная `seconds` содержит число', () => {
    expect(seconds).a('number');
});

it('Переменная `seconds` равна 60', () => {
    expect(seconds).eq(60);
});

it('Переменная `power` содержит значение', () => {
    expect(power).not.undefined;
});

it('Переменная `power` содержит число', () => {
    expect(power).a('number');
});

it('Переменная `power` равна 2', () => {
    expect(power).eq(2);
});

it('Переменная `result` содержит значение', () => {
    expect(result).not.undefined;
});

it('Переменная `result` содержит число', () => {
    expect(result).a('number');
});

it('Переменная `result` равна 3600', () => {
    expect(result).eq(3600);
});
