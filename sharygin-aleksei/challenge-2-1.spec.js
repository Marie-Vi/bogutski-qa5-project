const { expect } = require('chai');

/*
Name
1912 год, Антлантический океан.

Description

В ночь с 14 на 15 апреля 1912 года в северной части Атлантического океана потерпел крушение пароход,
который следовал по трансатлантическому маршруту Саутгемптон — Нью-Йорк.

Создайте переменную 'ship' с названием парохода, который потерпел крушение.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const car = 'Toyota';
```
*/

// Solution
const ship = 'Titanic';

// Tests

it('Переменная `ship` существует.', () => {
    expect(ship).not.undefined;
});

it('Переменная `ship` содержит строку.', () => {
    expect(ship).a('string');
});

it('Переменная `ship` содержит значение `Titanic`.', () => {
    expect(ship).eq("Titanic")
});
