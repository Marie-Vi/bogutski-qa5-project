const { expect } = require('chai');

/*
Name
Больше чем предыдущая на 5

Description

Создайте переменную `height` и присвойте ей любое число от 10 до 110.
Создайте вторую переменную `newHeight`, которая будет использовать
значение переменной `height` плюс 5.
То есть переменная `newHeight` будет на 5 больше `height`
Приведем пример, который принципиально похож на то что нужно сделать:
```
const before = 32;
const after = before + 4;
```

Конечно же вы можете написать:
```
const before = 32;
const after = 36;
```

Но в этом случае переменная `after`не будет зависеть от значения переменной `before`.
*/

// Solution
const height = 32;
const newHeight = height + 5;


// Tests
it('should variable `height` be a number',  () => {
  expect(height).a('number');
});

// continue here

// check the range of value

// check newHeight is number

// check newHeight is height + 5
