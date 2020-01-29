const {expect} = require('chai');

/*
Section 3. Примитивные типы данных. Урок 1. Динамически типизированные переменные

Name
Может ли бесконечность стать более бесконечной?

Short description
Сравните бесконечность и удвоенную бесконечность.

Description
Что больше: бесконечность или две бесконечности?

Создайте переменную с именем `infinity` и присвойте ей значение `Infinity`.
Создайте переменную с именем `doubleInfinity` и присвойте ей удвоенное значение переменной `infinity`.
Создайте переменную `isEqual` и присвойте ей результат сравнения (строгое равенство) переменной `infinity`
и переменной `doubleInfinity`.
Создайте переменную `typeOfIsEqual` и присвойте ей значение типа переменной `isEqual`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const zero = 0;
const doubleZero = zero * 2;
const isZeroEqualsToDoubleZero = zero === doubleZero;   //true
const type = typeof(isZeroEqualsToDoubleZero);          //"boolean"
```
*/

// Solution
const infinity = 1/0;
const doubleInfinity = infinity * 2;
const isEqual = infinity === doubleInfinity;
const typeOfIsEqual = typeof(isEqual);

// Tests

it('переменная `infinity` существует и имеет значение', () => {
    expect(infinity).not.undefined;
});

it('переменная `infinity` имеет тип number', () => {
    expect(infinity).a('number');
});

it('переменная `infinity` равна Infinity', () => {
    expect(infinity).equal(Infinity);
});

it('переменная `doubleInfinity` существует и имеет значение', () => {
    expect(doubleInfinity).not.undefined;
});

it('переменная `doubleInfinity` имеет тип number', () => {
    expect(doubleInfinity).a('number');
});

it('переменная `doubleInfinity` равна Infinity', () => {
    expect(doubleInfinity).eq(Infinity);
});

it('переменная `isEqual` существует и имеет значение', () => {
    expect(isEqual).not.undefined;
});

it('переменная `isEqual` имеет тип boolean', () => {
    expect(isEqual).a('boolean');
});

it('переменная `isEqual` равна true', () => {
        expect(isEqual).true;
});

it('переменная `typeOfIsEqual` существует и имеет значение', () => {
    expect(typeOfIsEqual).not.undefined;
});

it('переменная `typeOfIsEqual` имеет тип string', () => {
    expect(typeOfIsEqual).a('string');
});

it('переменная `typeOfIsEqual` равна boolean', () => {
    expect(typeOfIsEqual).equal('boolean');
});
