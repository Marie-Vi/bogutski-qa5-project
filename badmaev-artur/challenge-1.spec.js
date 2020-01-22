const { expect } = require('chai');

// Name
// Переменная с названием вида спорта

// Description
// Создайте переменную football и присвойте ей значение 'Barсelona'.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи
//const  hockey ='CSKA';

// Solution
const football ='Barcelona';

// Tests

it('Переменная `football` сушествует и имеет значение', () => {
  expect(football).not.undefined;
});

it('Переменная `football` содержит тип данных String', () => {
  expect(football).a('string');
});

it('Переменная `football` содержит значение Barcelona', () => {
  expect(football).eq('Barcelona');
});

