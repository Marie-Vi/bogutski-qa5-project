const { expect } = require('chai');

/*
Name
Сложение строк

Description

Создайте переменную `stringStart` и присвойте ей значение `Welcome to our class`.
Создайте переменную `stringEnd` и присвойте ей значение `John Smith`.
Создайте переменную `newString` которая будет результатом слияния переменной `stringStart` и переменной `stringEnd` с пробелом между ними.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
let name = 'Paul';
let surname = 'Smith'
let fullName = name + ' ' + surname;
```
*/

// Solution
let stringStart = 'Welcome to our class';
let stringEnd = 'John Smith';
let newString = stringStart + ' ' + stringEnd;


// Tests

it('Переменная `stringStart` содержит значение ', () => {
    expect(stringStart).not.undefined;
});

it('Переменная `stringEnd` содержит значение ', () => {
    expect(stringEnd).not.undefined;
});

it('Переменная `newString` содержит значение ', () => {
    expect(newString).not.undefined;
});

it('Переменная `stringStart` содержит строку', () => {
    expect(stringStart).a('string');
});

it('Переменная `stringEnd` содержит строку', () => {
    expect(stringEnd).a('string');
});

it('Переменная `newString` содержит строку', () => {
    expect(newString).a('string');
});

it('Переменная `stringStart` содержит значение ', () => {
    expect(stringStart).equal('Welcome to our class');
});

it('Переменная `stringEnd` содержит значение ', () => {
    expect(stringEnd).equal('John Smith');
});

it('Переменная `newString` содержит значение ', () => {
    expect(newString).equal('Welcome to our class John Smith');
});
