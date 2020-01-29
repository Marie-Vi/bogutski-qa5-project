const {expect} = require('chai');

/*
Section 3. Примитивные типы данных. Урок 1. Динамически типизированные переменные

Name
Какой тип имеет бесконечность?

Short description
Определите тип переменной со значением Infinity

Description

Создайте переменную `infinity` и присвойте ей значение результата деления произвольного положительного числа на 0.
Создайте переменную `typeOfInfinity` и присвойте ей значение типа переменной `infinity`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const inf = 2 / 0;
const typeOfInf = typeof(inf);
```
*/

// Solution
const infinity = 1 / 0;
const typeOfInfinity = typeof(infinity);

// Tests

it('переменная `infinity` существует и имеет значение', () => {
    expect(infinity).not.undefined;
});

it('переменная `infinity` имеет тип number', () => {
    expect(infinity).a('number');
});

it('переменная `infinity` равна Infinity', () => {
    expect(infinity).eq(Infinity);
});

it('переменная `typeOfInfinity` существует и имеет значение', () => {
    expect(typeOfInfinity).not.undefined;
});

it('переменная `typeOfInfinity` имеет тип string', () => {
    expect(typeOfInfinity).a('string');
});

it('переменная `typeOfInfinity` равна `number`', () => {
    expect(typeOfInfinity).equal('number');
});
