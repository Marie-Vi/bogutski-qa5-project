const { expect } = require('chai');

/*
Name
Мистер и миссис Смит

Description
Создайте переменную `abbreviation` и присвойте ей значение `Mr. & Mrs.`
Создайте вторую переменную `lastName` и присвойте ей значение `Smith`.
Создайте третью переменную `family` и присвойте ей значение,
получаемое в результате сложения переменных `abbreviation`, пробела и `lastName`

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const firstName = 'Ivan';
const lastName = 'Ivanov;
const name = firstName + ' ' + lastName;
```
*/

// Solution
const abbreviation = 'Mr. & Mrs.';
const lastName = 'Smith';
const family =  abbreviation + ' ' + lastName;

// Tests

it('Переменная `abbreviation` существует ', () => {
    expect(abbreviation).not.undefined;
});

it('Переменная `abbreviation` содержит тип данных string', () => {
    expect(abbreviation).a('string');
});

it('Переменная `abbreviation` содержит значение `Mr. & Mrs.`', () => {
    expect(abbreviation).eq('Mr. & Mrs.');
});

it('Переменная `lastName` существует ', () => {
    expect(lastName).not.undefined;
});

it('Переменная `lastName` содержит тип данных string', () => {
    expect(lastName).a('string');
});

it('Переменная `lastName` содержит значение `Smith`', () => {
    expect(lastName).eq('Smith');
});

it('Переменная `family` существует', () => {
    expect(family).not.undefined;
});

it('Переменная `family` содержит тип данных string', () => {
    expect(family).a('string');
});

it('Переменная `family` содержит `Mr. & Mrs. Smith`', () => {
    expect(family).eq('Mr. & Mrs. Smith');
});
