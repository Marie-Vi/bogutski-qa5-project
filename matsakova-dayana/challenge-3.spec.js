const { expect } = require('chai');

/*
Name
Последний символ в строке

Description

Создайте переменную `word` и присвойте ей значение `chandelier`.
Создайте вторую переменную `lastChar` и с помощью свойства length присвойте ей значение,
равное последнему символу в строке.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const word = 'beautiful';
const lastChar = word[word.length - 1];

```
*/

// Solution
const word = 'chandelier';
const lastChar = word[word.length - 1];

// Tests

it('Переменная `word` существует и имеет значение', () => {
  expect(word).not.undefined;
});

it('Переменная `word` содержит тип данных string', () => {
  expect(word).a('string');
});

it('Переменная `word` содержит значение `chandelier` ', () => {
  expect(word).eql('chandelier');
});

it('Переменная `lastChar` существует и имеет значение', () => {
  expect(lastChar).not.undefined;
});

it('Переменная `lastChar` содержит тип данных string', () => {
  expect(lastChar).a('string');
});

it('Переменная `lastChar` содержит значение, равное последнему символу в строке ', () => {
  expect(lastChar).eql('r');
});


