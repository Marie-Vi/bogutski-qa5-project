const {expect} = require('chai');

/*
Section 3. Примитивные типы данных. Урок 1. Динамически типизированные переменные

Name
Какой тип имеет специальное значение null?

Short description
Определите тип переменной со значением `null`

Description
Создайте переменную с именем `zero` и присвойте ей значение `null`.
Создайте переменную `typeOfZero` и присвойте ей значение типа переменной `zero`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const number = 12.9;
const typeOfNumber = typeof number;
```
*/

// Solution
const zero = null;
const typeOfZero = typeof zero;

// Tests

it('переменная `zero` существует и имеет значение', () => {
    expect(zero).not.undefined;
});

it('переменная `zero` содержит значение null', () => {
    expect(zero).to.be.null;
});

it('переменная `typeOfZero` существует и имеет значение', () => {
    expect(typeOfZero).not.undefined;
});

it('переменная `typeOfZero` имеет тип string', () => {
    expect(typeOfZero).a('string');
});

it('переменная `typeOfZero` равна `object`', () => {
    expect(typeOfZero).equal('object');
});

