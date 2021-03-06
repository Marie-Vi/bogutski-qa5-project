const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Создание переменной без значения

Description
Переменную можно создать, не присваивая ей значение.
Создайте переменную с именем `phoneNumber` без присваивания ей какого-либо значения.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
let age;
```
*/

// Solution
let phoneNumber;

// Tests

it('переменная `phoneNumber` существует и не имеет значения', () => {
    expect(phoneNumber).to.be.undefined;
});

it('переменная `phoneNumber` имеет тип undefined', () => {
    expect(typeof phoneNumber).eq('undefined');
});
