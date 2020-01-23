const { expect } = require('chai');

/*
Name
Меньше чем предыдущая на 5

Description

Осенью в саду Лена посадила 15 луковиц тюльпанов `tulips`.
Весной расцвело 10 тюльпанов `newTulips`, что меньше `tulips` на 5.

Приведем пример, который принципиально похож на то что нужно сделать:
const flowers  = 15;
const newFlowers = flowers - 5;
```

// Solution
// Tests

 */

const tulips = 15;
const newTulips = tulips - 5;

it('should variable `tulips` be a number',  () => {
    expect(tulips).a('number');
});

it('should `tulips` equal ',  () => {
    expect(tulips).eq(15);
});

it('should `newTulips` be a number ',  () => {
    expect(newTulips).a('number');
});

it('should `newTulips` equal tulips - 5' ,  () => {
    expect(tulips-5).eq(newTulips);
});

it('should `newTulips` greater than 9', () => {
    expect(newTulips).gte(9);
});

it('should `tulips` greater than 14', () => {
    expect(tulips).gte(14);
});

