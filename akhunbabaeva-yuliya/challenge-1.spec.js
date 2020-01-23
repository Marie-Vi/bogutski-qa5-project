const { expect } = require('chai');

/*
Name
Больше чем предыдущая на 3

Description

Осенью в саду Лена посадила 12 луковиц тюльпанов `tulips`.
Весной расцвело 15 тюльпанов `newTulips`, что больше `tulips` на 3.

const tulips = 12;
const newTulips = tulips + 3;
```

// Solution

// Tests

 */

const tulips = 12;
const newTulips = tulips + 3;

it('should variable `tulips` be a number',  () => {
    expect(tulips).a('number');
});

it('should `tulips` equal ',  () => {
    expect(tulips).eq(12);
});

it('should `newTulips` be a number ',  () => {
    expect(newTulips).a('number');
});

it('should `newTulips` equal tulips + 3' ,  () => {
    expect(tulips+3).eq(newTulips);
});

it('should `newTulips` greater than 14', () => {
    expect(newTulips).gte(14);
});

it('should `tulips` greater than 11', () => {
    expect(tulips).gte(11);
});

