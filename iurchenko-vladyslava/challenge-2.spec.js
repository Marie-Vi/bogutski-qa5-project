const { expect } = require('chai');


/*
Name
Пустая строка и ее длина.

Description

Создайте переменную `age` и присвойте ей пустую строку. Создайте вторую переменную `ageLength` и присвойте ей длину этой строки. Определите длину строки.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const name = '';
const nameLength = name.length;
```
*/

// Solution
const age = '';
const ageLength = age.length;

// Tests

it('Переменная `age` существует и ей присвоено какое-то значение', () => {
  expect(age).not.undefined;
});

it('Переменная `ageLength` существует и ей присвоено какое-то значение', () => {
  expect(ageLength).not.undefined;
});

it('Значение переменной `age` является пустой строкой', () => {
  expect('').to.be.empty;
});

it('Длина переменной `age` равна нулю', () => {
  expect('').to.have.lengthOf(0);
});

it('Переменная `ageLength` равна длине строки `age`', () => {
  expect(ageLength).to.be.equal(age.length);
});