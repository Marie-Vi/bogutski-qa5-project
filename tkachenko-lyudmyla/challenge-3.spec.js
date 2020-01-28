const { expect } = require('chai');

//Name
//Гости на пороге

//Description
//Хозяйка испекла пирожки, а тут и гости на пороге. Сколько пирожков достанется каждому гостю, если пирожки еще в духовке?
//Создайте переменную `pies` и присвойте ей значение 28
//Создайте переменную `guests` и присвойте ей значение 7 (количество гостей)
//Создайте переменную `result` и посчитайте, сколько пирожков достанется каждому гостю

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи

// ```
// const months = 12;
// const seasons = 4;
// const oneSeason = months / seasons;
// ```;

//Solution
const pies = 28;
const guests = 7;
const result = pies / guests;

// Tests
it('Переменная `pies` существует и содержит значение ', () => {
    expect(pies).not.to.be.undefined;
});

it('Переменная `guests` существует и содержит значение', () => {
    expect(guests).not.to.be.undefined;
});

it('Значение переменной `pies` - число', () => {
    expect(pies).a('number');
});

it('Значение переменной `guests` больше 0', () => {
    expect(guests).gt(0);
});

it('Значение переменной `guests` - число', () => {
    expect(guests).a('number');
});

it('Результат `result` - число 4', () => {
    expect(result).eq(4);
});