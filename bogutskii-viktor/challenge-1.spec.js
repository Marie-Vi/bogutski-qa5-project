const { expect } = require('chai');

// Name
// Больше чем предыдущаая на 5

// Description
// Создайте переменную `height` и присвойте ей любое число от 10 до 110
// Создайте вторую переменную `newHeight`, которая будет использовать
// значение переменной `height` плюс 5.
// То есть переменная `newHeight` будет на 5 больше `height`
// Приведем пример, коорый принципиально похож на то что нужно сделать

// ```
// const before = 32;
// const after = before + 4;
// ```

// Конечно вы можете написать
//   ```
// const before = 32;
// const after = 36;
// ```
// Но в этом случае вторая переменная не будет зависеть от значения первой переменной


// Solution
const height = 32;
const newHeight = height + 4;


// Tests
it('should variable `height` be a number',  () => {
  expect(height).a('number');
});

// continue here

// check the range of value

// check newHeight is number

// check newHeight is height + 5
