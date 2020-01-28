const { expect } = require('chai');
/*
Name
Голодные гости на пороге. Делим пирожки справедливо

Description
Хозяйка испекла пирожки, а тут пришли. Сколько пирожков достанется каждому гостю?

Создайте переменную `pies` и присвойте ей значение 28
Создайте переменную `guests` и присвойте ей значение 7 (количество гостей)
Создайте переменную `result` и рассчитайте в ней, сколько пирожков достанется каждому гостю

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи

```
const months = 12;
const seasons = 4;
const oneSeason = months / seasons;
```
*/

//Solution
const pies = 28;
const guests = 7;
const result = pies / guests;

// Tests
it('Переменная `pies` существует и содержит значение ', () => {
    expect(pies).not.to.be.undefined;
});

it('Значение переменной `pies` - число', () => {
    expect(pies).a('number');
});

it('Значение переменной `pies` равно 28', () => {
    expect(pies).eq(28);
});

it('Переменная `guests` существует и содержит значение', () => {
    expect(guests).not.to.be.undefined;
});

it('Значение переменной `guests` - число', () => {
    expect(guests).a('number');
});

it('Результат `result` - число 4', () => {
    expect(result).eq(4);
});
