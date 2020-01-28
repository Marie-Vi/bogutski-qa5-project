const { expect } = require('chai');

/*
Name
Boolean. Кто из подруг собрал больше грибов?

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
const deckOfCardsForJass = 36;
const trueOrFalse = deckOfCardsForPoker < deckOfCardsForJass; //false
```
*/

// Solution
const firstCart = 20;
const secondCart = 23;
const trueOrFalse = firstCart < secondCart;

// Tests

it('Переменная `firstCart` существует и содержит значение', () => {
  expect(firstCart).not.undefined;
});

it('Переменная `secondCart` существует и содержит значение', () => {
  expect(secondCart).not.undefined;
});

it('Переменная `trueOrFalse` существует и содержит значение', () => {
    expect(trueOrFalse).not.undefined;
});

it('Переменная `firstCart` содержит тип данных `number`', () => {
  expect(firstCart).a('number');
});

it('Переменная `secondCart` содержит тип данных `number`', () => {
  expect(secondCart).a('number');
});

it('Переменная `trueOrFalse` содержит тип данных `boolean`', () => {
  expect(trueOrFalse).a('boolean');
});

it('Переменная `firstCart` содержит значение 20', () => {
  expect(firstCart).eq(20);
});

it('Переменная `secondCart` содержит значение 23', () => {
  expect(secondCart).eq(23);
});

it('Переменная `trueOrFalse` содержит значение `true`', () => {
  expect(trueOrFalse).eq(true);
});
