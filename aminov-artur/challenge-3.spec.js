const { expect } = require('chai');

/*
Name
Упражнение на слияние строк.
Составьте фразу из слов.

Description
Создайте переменную `firstPart` и присвойте ей значение `Welcome to`.
Создайте переменную `secondPart` и присвойте ей значение `Sacramento, California!`.
Создайте переменную `phrase` и присвойте ей значение слияния этих двух строк с пробелом между ними.

Приведем пример, который принципиально похож на то что нужно сделать, но адаптируйте его к требованиям задачи:
```
const greeting = `Hello,`;
const name = `John Smith!`;
const sayHello = greeting + ' ' + name; (обратите внимание на обозначение пробела между строками)
```
*/

// Solution
const firstPart = 'Welcome to';
const secondPart = 'Sacramento, California!';
const sayHello = firstPart + ' ' + secondPart;

// Tests

it('Переменная `firstPart` содержит значение', () => {
    expect(firstPart).not.undefined;
});

it('Переменная `secondPart` содержит значение', () => {
    expect(secondPart).not.undefined;
});

it('Тип данных переменной `firstPart` является строкой', () => {
    expect(firstPart).a('string');
});

it('Тип данных переменной `secondPart` является строкой', () => {
    expect(secondPart).a('string');
});

it('Переменная `firstPart` содержит значение `Welcome to`', () => {
    expect(firstPart).eq('Welcome to');
});

it('Переменная `secondPart` содержит значение `Sacramento, California!`', () => {
    expect(secondPart).eq('Sacramento, California!');
});

it('Переменная `sayHello` содержит значение', () => {
    expect(sayHello).not.undefined;
});

it('Тип данных переменной `sayHello` является строкой', () => {
    expect(sayHello).a('string');
});

it('Переменная `sayHello` равна слиянию строк firstPart и secondPart', () => {
    expect(sayHello).eq('Welcome to Sacramento, California!');
});
