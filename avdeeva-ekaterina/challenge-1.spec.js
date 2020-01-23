const { expect } = require('chai');
/*
Name
Переменная с именем книги.

Description
В 1865 году английский математик Льюис Кэрролл написал знаменитую детскую сказку.
Создайте переменную `nameOfBook` и присвойте ей значение 'Alice in Wonderland'.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
const nameOfNewspaper = 'The New York Times';
 */

// Solution
const nameOfBook = 'Alice in Wonderland';

// Tests
it('Переменная `nameOfBook` существует и имеет значение', () => {
  expect(nameOfBook).not.undefined;
});

it('Переменная `nameOfBook` содержит тип данных string', () => {
  expect(nameOfBook).a('string');
});

it('Переменная `nameOfBook` содержит значение `Alice in Wonderland`', () => {
  expect(nameOfBook).eq('Alice in Wonderland');
});




