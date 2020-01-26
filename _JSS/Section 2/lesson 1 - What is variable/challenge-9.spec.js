const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Null или просто "ничего"

Description
Null - специальное значение, которое имеет смысл «ничего» или «значение неизвестно».
Создайте переменную с именем `zero` и присвойте ей специальное значение null.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const age = null;
```
*/

// Solution
const zero = null;

// Tests

it('переменная `zero` существует и имеет значение', () => {
    expect(zero).not.undefined;
});

it('переменная `zero` имеет тип object', () => {
    expect(typeof zero).eq('object');
});

it('значение переменной `zero` равно null', () => {
    expect(zero).equal(null);
});
