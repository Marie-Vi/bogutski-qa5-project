const { expect } = require('chai');

/*
Course Name: Javascript Syntax
Section Name: `Тип "string" (Строка)`

Упражнение по слиянию строк `Guess Song`

Description
Создайте переменную `firstWord` и присвойте ей значение `Nebo`.
Создайте переменную `secondWord` и присвойте ей значение `Londona`.
Создайте переменную `guessSong` и присвойте ей значение слияния этих двух строк с пробелом между ними.

Приведем пример, который принципиально похож на то что нужно сделать, но адаптируйте его к требованиям задачи:
```
const animal1 = `dog`;
const animal2 = `cat`;
const total = animal1 + ' ' + animal2; (обратите внимание на обозначение пробела между строками)
```
*/

// Solution
const firstWord = 'Nebo';
const secondWord = 'Londona';
const guessSong = firstWord + ' ' + secondWord;

// Tests

it('Переменная `firstWord` содержит значение', () => {
  expect(firstWord).not.undefined;
});

it('Переменная `secondWord` содержит значение', () => {
  expect(secondWord).not.undefined;
});

it('Тип данных переменной `firstWord` является строкой', () => {
  expect(firstWord).a('string');
});

it('Тип данных переменной `secondWord` является строкой', () => {
  expect(secondWord).a('string');
});

it('Переменная `guessSong` равно слиянию строк firstWord и secondWord', () => {
  expect(guessSong).eq('Nebo Londona');
});