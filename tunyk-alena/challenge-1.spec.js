const { expect } = require('chai');

/*
Name
Number Increment

Description

Создайте переменную `anyNumber` и присвойте ей любое число.
Создайте вторую переменную `newNumber`, которая будет использовать
значение переменной `anyNumber` плюс 1.
Приведем пример, который принципиально похож на то что нужно сделать:
```
const before = 32;
const after = before + 1;
```
*/

// Solution
const anyNumber = 32;
const newNumber = anyNumber + 1;


// Tests
it('Should variable `anyNumber` has value', () =>{
  expect(anyNumber).not.undefined;
});

it('Should variable `anyNumber` be a number',  () => {
  expect(anyNumber).a('number');
});

it('Should variable `newNumber` be a number',  () => {
  expect(newNumber).a('number');
});

it('Should variable newNumber has value', () =>{
  expect(newNumber).not.undefined;
});

it('Should variable newNumber has correct value', () =>{
  expect(newNumber).equal(anyNumber + 1);
});


