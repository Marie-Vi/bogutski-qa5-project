const {expect} = require('chai');

/*
Section 3. Примитивные типы данных. Урок 1. Динамически типизированные переменные

Name
Какой тип имеет строка и текст?

Short description
Определите тип переменной со значением `hello world`

Description

Создайте переменную с именем `message` и присвойте ей значение `hello world`.
Создайте переменную `typeOfMessage` и присвойте ей значение типа переменной `message`.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const hi = 'good morning';
const typeOfHi = typeof(hi);
```
*/

// Solution
const message = 'hello world';
const typeOfMessage = typeof(message);

// Tests

it('переменная `message` существует и имеет значение', () => {
    expect(message).not.undefined;
});

it('переменная `message` имеет тип string', () => {
    expect(message).a('string');
});

it('переменная `message` равна `hello world`', () => {
    expect(message).eq('hello world');
});

it('переменная `typeOfMessage` существует и имеет значение', () => {
    expect(typeOfMessage).not.undefined;
});

it('переменная `typeOfMessage` имеет тип string', () => {
    expect(typeOfMessage).a('string');
});

it('переменная `typeOfMessage` равна `string`', () => {
    expect(typeOfMessage).equal('string');
});

