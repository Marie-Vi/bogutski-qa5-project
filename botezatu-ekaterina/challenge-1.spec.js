const { expect } = require('chai');

/*
Name
How much did it cost to stay in the hotel?

Description

Katie went on a miny vacation in Orlando and stayed in a hotel for 2 nights. Each night it cost her $ 50 dollars. How much
did it cost her to stay in a  hotel for 2 nights?

Declare a variable `firstNight` and assign the value 50 to it.
Declare a second variable `secondNight` and assign the same value to it.
Declare a third variable `total` and find out the total money she paid.

Give a similar example below:
const redDress = 25;
const blueDress = 35;
const amountPaid = redDress + blueDress;

*/

// Solution
const firstNight = 50;
const secondNight = 50;
const total  = firstNight + secondNight;


// Tests
describe('Stay in the hotel', () => {
it('should variable `firstNight` store a value', () => {
  expect(firstNight).not.undefined;
});

it('should variable `firstNight` be a number',  () => {
  expect(firstNight).a('number');
});

it('should variable `firstNight` store a value of 50',  () => {
  expect(firstNight).eq(50);
});



it('should variable `secondNight` store a value', () => {
  expect(secondNight).not.undefined;
});

it('should variable `secondNight` be a number',  () => {
  expect(secondNight).a('number');
});

it('should variable `secondNight` store a value of 50',  () => {
  expect(secondNight).eq(50);
});



it('should variable `total` store a value', () => {
  expect(total).not.undefined;
});

it('should variable `total` be a number',  () => {
  expect(total).a('number');
});

it('should variable `total` store a value of 100',  () => {
  expect(total).eq(firstNight + secondNight);
});
});

