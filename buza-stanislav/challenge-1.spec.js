const { expect } = require('chai');

/*
Name
Favorite car.

Description

Create a variable with the name  `car` and assign value 'Tesla'.
Create a second variable with the name `model` and assign value `Model X`,
Create a third variable `carAndModel`, assigned value  must be previews 2 values added up with a space between them

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const car = 'Tesla';
const model = 'Model X';
const carAndModel = car + ' ' + model;
```
*/

// Solution
const car = 'Tesla';
const model = 'Model X';
const carAndModel = car + ' ' + model;

// Tests

it('Переменная `car` содержит значение', () => {
  expect(car).not.undefined;
});

it('Переменная `car` содержит string', () => {
  expect(car).a('string');
});


it('Переменная `model` содержит значение', () => {
  expect(model).not.undefined;
});

it('Переменная `model` содержит string', () => {
  expect(model).a('string');
});


it('Переменная `carAndModel` содержит значение', () => {
  expect(carAndModel).not.undefined;
});

it('Переменная `carAndModel` содержит string', () => {
  expect(carAndModel).a('string');
});

it('Variable `carAndModel` equal expected result', () => {
  expect(carAndModel).eq('Tesla Model X');
});