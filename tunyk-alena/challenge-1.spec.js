const { expect } = require('chai');

/*
Name
Increment
Description

Создайте переменную `number` и присвойте ей любое число .
Создайте вторую переменную `newNumber`, которая будет использовать
значение переменной `number` плюс 1.
Приведем пример, который принципиально похож на то что нужно сделать:
```
const before = 32;
const after = before + 1;
```
*/

// Solution
const number = 32;
const newNumber = number + 1;


// Tests
it('should variable `number` be a number',  () => {
  expect(number).a('number');
});

it('should variable number has value', () =>{
  expect(number).not.undefined;
});

it('should variable `newNumber` be a number',  () => {
  expect(newNumber).a('number');
});

it('should variable newNumber has value', () =>{
  expect(newNumber).not.undefined;
});

it('should variable newNumber has correct value', () =>{
  expect(newNumber).equal(number + 1);
});


