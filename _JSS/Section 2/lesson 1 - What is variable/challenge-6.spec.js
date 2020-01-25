const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
«Чертова дюжина»

Description
Число 13 или «чертова дюжина» во многих странах считается несчастливым, а боязнь числа 13 называется трискаидекафобией.
Например, во многих пассажирских самолётах отсутствует тринадцатый ряд.

Создайте переменную с именем `isRow12` и присвойте ей значение true.
Создайте переменную с именем `isRow13` и присвойте ей значение false.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const isGold = true;
```
*/

// Solution

const isRow12 = true;
const isRow13 = false;

// Tests

it('переменная `isRow12` существует и имеет значение', () => {
    expect(isRow12).not.undefined;
});

it('переменная `isRow12` имеет булевый тип', () => {
    expect(isRow12).a('boolean');
});

it('значение переменной `isRow12` равно true', () => {
    expect(isRow12).true;
});

it('переменная `isRow13` существует и имеет значение', () => {
    expect(isRow13).not.undefined;
});

it('переменная `isRow13` имеет булевый тип', () => {
    expect(isRow13).a('boolean');
});

it('значение переменной `isRow13` равно false', () => {
    expect(isRow13).false;
});




