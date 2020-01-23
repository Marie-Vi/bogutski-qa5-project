const { expect } = require('chai');

/*
Name
Сумма двух строк.

Description

Задайте две переменные: a со значением '68' и b со значением '12'.
Найдите результат слияния этих строк и запишите его в переменную sum.



Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const c = '24';
const d = '10';
const sum = c + d;
```
*/

// Solution
const a = '68';
const b = '12';
const sum = a + b;

// Tests

it('Переменная `a` существует', () => {
    expect(a).not.undefined;
});
it('Переменная `a`  имеет значение `68', () => {
    expect(a).not.undefined;
});
it('Переменная `a` имеет тип данных string', () => {
    expect(a).eq('68');
});

it('Переменная `b` существует', () => {
    expect(b).not.undefined;
});
it('Переменная `b` имеет тип данных string', () => {
    expect(a).eq('12');
});

it('Переменная `b` имеет тип данных string', () => {
    expect(b).a('string');
});
it('Переменная `sum` содержит значение 6812', () => {
    expect(sum).equal('6812');
});
it('Переменная `sum` существует ', () => {
    expect(b).not.undefined;
});

it('Переменная `sum` имеет тип данных string', () => {
    expect(b).a('string');
});