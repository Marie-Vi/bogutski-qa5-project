const { expect } = require('chai');

/*
Слияние строк

Создайте переменную `firstName` и присвойте ей значение 'Buzz'.
Создайте вторую переменную `lastName` и присвойте ей значение 'Lightyear'.
Создайте третью переменную `space` и присвойте ей значение пробела ' '.
Создайте четвертую переменную `fullName`, в которой нужно склеить предыдущие строки
чтобы получилось `Buzz Lightyear`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const a = 'Mickey';
const c = 'Mouse';
const b = ' ';
const d = a + b + c; // 'Mickey Mouse'
```
*/

// Solution
const firstName = 'Buzz';
const lastName = 'Lightyear';
const space = ' ';
const fullName = 'Buzz Lightyear';

// Tests
it('Переменная `firstName` существует и содержит значение', () => {
  expect(firstName).not.undefined;
});

it('Переменная `firstName` содержит строку', () => {
  expect(firstName).a('string');
});

it('Переменная `firstName` содержит значение', () => {
  expect(firstName).equal('Buzz');
});

it('Переменная `lastName` существует и имеет  значение', () => {
  expect(lastName).not.undefined;
});

it('Переменная `lastName` содержит строку', () => {
  expect(lastName).a('string');
});

it('Переменная `lastName` содержит значение', () => {
  expect(lastName).equal('Lightyear');
});

it('Переменная `space` существует и имеет  значение', () => {
  expect(space).not.undefined;
});

it('Переменная `space` содержит строку', () => {
  expect(space).a('string');
});

it('Переменная `space` содержит значение', () => {
  expect(space).equal(' ');
});

it('Переменная `fullName` существует и имеет значение', () => {
  expect(fullName).not.undefined;
});

it('Переменная `fullName` содержит строку', () => {
  expect(fullName).a('string');
});

it('Переменная `fullName` содержит значение', () => {
  expect(fullName).equal('Buzz Lightyear');
});





