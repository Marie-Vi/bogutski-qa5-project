const { expect } = require('chai');

/*
Name
Упражнение слияния строк Gems
Description
Создайте переменную `gems` и присвойте ей значение `Diamonds`.
Создайте переменную `statement` и присвойте ей значение `are girls best friends`.
Создайте переменную `final` и присвойте ей значение слияния этих двух строк с пробелом между ними.
Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const fruit1 = `peaches`;
const fruit2 = `apples`;
const fruitFinal = fruit1 + ' ' + fruit2;
```
*/

// Solution
const gems = 'Diamonds';
const statement = 'are girls best friends';
const final = gems + ' ' + statement;

// Tests

it('Переменная `gems` содержит значение', () => {
  expect(gems).not.undefined;
});

it('Переменная `statement` содержит значение', () => {
  expect(statement).not.undefined;
});

it('Тип данных переменной `gems` является строкой', () => {
  expect(gems).a('string');
});

it('Тип данных переменной `statement` является строкой', () => {
  expect(statement).a('string');
});

it('Переменная `final` равно слиянию строк gems и statement', () => {
  expect(final).eq('Diamonds are girls best friends');
});