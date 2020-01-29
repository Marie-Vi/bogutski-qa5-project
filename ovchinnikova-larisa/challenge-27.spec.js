const {expect} = require('chai');

/*
Section 3. Примитивные типы данных. Урок 1. Динамически типизированные переменные

Name
Переменная с числовым значением

Short description
Определите тип переменной age

Description

Создайте переменную `age` и присвойте ей значение произвольного числа от 0 до 120.
Создайте переменную `typeOfAge` и присвойте ей значение типа переменной `age`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const phoneNumber = 911;
const typeOfPhoneNumber = typeof(phoneNumber);
```
*/

// Solution
const age = 35;
const typeOfAge = typeof(age);

// Tests

it('переменная `age` существует и имеет значение', () => {
    expect(age).not.undefined;
});

it('переменная `age` имеет тип number', () => {
    expect(age).a('number');
});

it('переменная `age` находится в диапазоне от 0 до 120', () => {
    expect(age >= 0 && age <= 120).true;
});

it('переменная `typeOfAge` существует и имеет значение', () => {
    expect(typeOfAge).not.undefined;
});

it('переменная `typeOfAge` имеет тип string', () => {
    expect(typeOfAge).a('string');
});

it('переменная `typeOfAge` равна `number`', () => {
    expect(typeOfAge).equal('number');
});
