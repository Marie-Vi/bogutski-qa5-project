const { expect } = require('chai');

// Name
// Возведение в степень

// Синтаксис возведения в степень – две звездочки подряд (**).

// Description
// В одной минуте 60 секунд. В одном часе 60 минут.
// Найдите количество секунд в 1 часе с использованием оператора возведения в степень.
// Создайте переменную `second` и присвойте ей значение 60.
// Создайте переменную `power` и присвойте ей значение 2.
// Создайте переменную `result` и присвойте ей значение `second` в степени `power`.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи:

// ```
// const n = 5;
// const cube = 3;
// const result = n ** cube;
// ```;

// Solution
const second = 60;
const power = 2;
const result = second ** power;


// Tests
//................second.............................
it('Переменная `second` содержит значение', () => {
    expect(second).not.undefined;
});

it('Переменная `second` содержит число', () => {
    expect(second).a('number');
});

it('Переменная `second` равна 60', () => {
    expect(second).eq(60);
});

//................power.............................
it('Переменная `power` содержит значение', () => {
    expect(power).not.undefined;
});

it('Переменная `power` содержит число', () => {
    expect(power).a('number');
});

it('Переменная `power` равна 2', () => {
    expect(power).eq(2);
});

//................result.............................
it('Переменная `result` содержит значение', () => {
    expect(result).not.undefined;
});

it('Переменная `result` содержит число', () => {
    expect(result).a('number');
});

it('Переменная `result` равна 3600', () => {
    expect(result).eq(3600);
});
