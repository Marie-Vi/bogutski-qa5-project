const {expect} = require('chai');

/* Name
 Конкатенация строк

 Description
Создайте переменную `firstName` и присвойте ей значение 'Elvis'.
Создайте переменную `lastName` и присвойте ей значение 'Presley'.
Создайте переменную `name` и присвойте ей результат конкатенации переменных `firstName` и `lastName` с пробелом между ними.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const firstName = 'Barack';
const lastName = 'Obama';
const name = firstName + ' ' + lastName;
```

Solution
 */
const firstName = 'Elvis';
const lastName = 'Presley';
const name = firstName + ' ' + lastName;

// Tests

it('Переменная `firstName` существует и содержит значение', () => {
    expect(firstName).not.undefined;
});

it('Переменная `firstName` содержит тип данных string', () => {
    expect(firstName).a('string');
});

it('Переменная `firstName` принимает значение "Elvis" ', () => {
    expect(firstName).eq('Elvis');
});

it('Переменная `lastName` существует и содержит значение', () => {
    expect(lastName).not.undefined;
});

it('Переменная `lastName` содержит тип данных string', () => {
    expect(lastName).a('string');
});

it('Переменная `lastName` принимает значение "Presley" ', () => {
    expect(lastName).eq('Presley');
});

it('Переменная `name` существует и содержит значение', () => {
    expect(name).not.undefined;
});

it('Переменная `name` содержит тип данных string', () => {
    expect(name).a('string');
});

it('Переменная `name` принимает значение "Elvis Presley" ', () => {
    expect(name).eq('Elvis Presley');
});


