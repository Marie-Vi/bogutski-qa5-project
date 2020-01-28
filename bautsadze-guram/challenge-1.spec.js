const { expect } = require('chai');

/*
Name
Найти длину строки

Description

Создайте переменную `volcanoName` и присвойте ей значение `Eyjafjallajokull`,
создайте вторую перемeнную `strLength` и при помощи свойства length получите
длину строки переменной `volcanoName`.
В результате вы узнаете, какое количество букв содержит название знаменитого
исландского вулкана.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи.
```
const mountainName = `Hvannadalshnukur`; // самая высокая гора в Исландии
const strLength = mountainName.length; // 16
```
 */

// Solution

const volcanoName = 'Eyjafjallajokull';
const strLength = volcanoName.length;

// Tests

it('Переменная `volcanoName` не `undefined`', () => {
  expect(volcanoName).not.undefined;
});

it('Переменная `volcanoName` содержит тип данных `string`', () => {
  expect(volcanoName).a('string');
});

it('Переменная `volcanoName` содержит значение `Eyjafjallajokull`', () => {
  expect(volcanoName).eq(`Eyjafjallajokull`);
});

it('Переменная `strLength` не `undefined`', () => {
  expect(strLength).not.undefined;
});

it('Переменная `strLength` содержит тип данных `number`', () => {
  expect(strLength).a('number');
});

it('Переменная `strLength` равна 16', () => {
  expect(strLength).eq(16);
});
