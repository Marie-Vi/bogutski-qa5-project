const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Null или намеренное отсутствие какого-либо значения

Description
Null - специальное значение, которое имеет смысл `значение намеренно отсутствует`.
Создайте переменную с именем `futureProfit` и присвойте ей специальное значение null.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const nextWinner = null;
```
*/

// Solution
const futureProfit = null;

// Tests

it('переменная `futureProfit` существует и имеет значение', () => {
    expect(futureProfit).not.undefined;
});

it('значение переменной `futureProfit` равно null', () => {
    expect(futureProfit).equal(null);
});
