const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Unix time

Description
С 1 января 1970 года идет отсчет времени в Unix системах.
Создайте переменную unixTime и присвойте значение 1970 числом.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const age = 38;
```
*/

// Solution

const unixTime = 1970;

// Tests

it('переменная `unixTime` существует и имеет значение', () => {
    expect(unixTime).not.undefined;
});

it('переменная `unixTime` имеет числовой тип', () => {
    expect(unixTime).a('number');
});

it('значение переменной `unixTime` равно 1970', () => {
    expect(unixTime).equal(1970);
});






