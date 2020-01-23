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
const sum = c + d;;
```
*/

// Solution
const a = '68';
const b = '12';
const sum = a + b;

// Tests

it('Переменная `a` существует и имеет значение ', () => {
    expect(a).not.undefined;
});
it('Переменная `b` существует и имеет значение ', () => {
    expect(b).not.undefined;
});

it('Переменная `a` содержит тип данных string', () => {
    expect(a).a('string');
});
it('Переменная `b` содержит тип данных string', () => {
    expect(b).a('string');
});
it('Переменная `sum` содержит значение 6812', () => {
    expect(sum).equal('6812');
});