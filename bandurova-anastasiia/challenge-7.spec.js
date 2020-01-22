const { expect } = require('chai');

/*
Name
Кто из подруг собрал больше грибов?

Description

Две подружки пошли в лес по грибы, а после их сбора решили посчитать, кто собрал больше.
Первая подруга насчитала в своем лукошке 20 грибов, а вторая - 23.
Создайте две переменные `firstCart` и `secondCart` присвойте им соответствующие значения 20 и 23.
Создайте третью переменную `trueOrFalse` и проверьте:
Правда ли, что вторая подруга собрала больше грибов?

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const deckOfCardsForPoker = 52;
const deckOfCardsForJass= 36;
const trueOrFalse = deckOfCardsForPoker < deckOfCardsForJass; //false
```
*/

// Solution
const firstCart = 20;
const secondCart = 23;
const trueOrFalse = firstCart < secondCart;

// Tests

it('Переменная `firstCart` существует и содержит данные', () => {
  expect(firstCart).not.undefined;
});

it('Переменная `secondCart` существует и содержит данные', () => {
  expect(secondCart).not.undefined;
});

it('Переменная `trueOrFalse` существует и содержит данные', () => {
    expect(trueOrFalse).not.undefined;
});

it('Переменная `firstCart` содержит данные number', () => {
  expect(firstCart).a('number');
});

it('Переменная `secondCart` содержит данные number', () => {
  expect(secondCart).a('number');
});

it('Переменная `trueOrFalse` содержит тип данных boolean', () => {
  expect(trueOrFalse).a('boolean');
});

it('Переменная `trueOrFalse` должна содержать значение true ', () => {
  expect(trueOrFalse).eq(true);
});