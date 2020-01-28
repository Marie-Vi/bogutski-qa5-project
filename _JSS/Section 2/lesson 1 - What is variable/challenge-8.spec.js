const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Что такое пустота?

Description
_Слово - это пустота, со всех сторон облепленная буквами* (Юрий Ханон)._
Создайте переменную с именем `emptyString` и присвойте ей пустую строку.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const word = '';
```
*/

// Solution

const emptyString = '';

// Tests

it('переменная `emptyString` существует и имеет значение', () => {
    expect(emptyString).not.undefined;
});

it('переменная `emptyString` является строкой', () => {
    expect(emptyString).a('string');
});

it('длина строки `empty` равна 0', () => {
    expect(empty.length).equal(0);
});

it('значение переменной `emptyString` равно пустой строке', () => {
    expect(emptyString).equal('');
});
