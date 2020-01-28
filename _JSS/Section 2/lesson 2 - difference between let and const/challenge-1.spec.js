const {expect} = require('chai');

/*
Section 2. Переменные. Урок 2. Разница между let и const

Name
Количество приседаний

Description
Каждый день Вася утром делает ровно 50 приседаний, и это количество он никогда не изменяет.
Сколько приседаний сделает Вася за `days` дней?

Создайте константу именем `sitUps` (количество приседаний в день) и присвойте ей значение 50.
Создайте переменную с именем `days` (количество дней) и присвойте ей произвольное число от 1 до 365.
Создайте переменную `numberOfSitUps` (общее количество приседаний) и присвойте ей значение произведения
переменных `sitUps` и `days`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const pencil = 10;
const boxes = 140;
const amount = pencil * boxes;
```
*/

// Solution
const sitUps = 50;
const days = 15;
const numberOfSitUps = sitUps * days;

// Tests

it('переменная `sitUps` существует и имеет значение', () => {
    expect(sitUps).not.undefined;
});

it('переменная `sitUps` является числом', () => {
    expect(sitUps).a('number');
});

it('значение переменной `sitUps` равно 50', () => {
    expect(sitUps).equal(50);
});

it('переменная `days` существует и имеет значение', () => {
    expect(days).not.undefined;
});

it('переменная `days` является числом', () => {
    expect(days).a('number');
});

it('значение переменной `days` находится в диапазоне от 1 до 365', () => {
    expect(days >= 1 && days <= 365).true;
});

it('переменная `numberOfSitUps` существует и имеет значение', () => {
    expect(numberOfSitUps).not.undefined;
});

it('переменная `numberOfSitUps` является числом', () => {
    expect(numberOfSitUps).a('number');
});

it('значение переменной `numberOfSitUps` вычислено верно', () => {
    expect(numberOfSitUps).equal(sitUps * days);
});
