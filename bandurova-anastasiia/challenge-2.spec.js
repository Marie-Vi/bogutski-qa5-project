const { expect } = require('chai');

/*
Name
Получите в результате вычисления NaN

Description
Создайте переменную `calculation`, где будет происходить арифметическая операция, в результате которой получим NaN;

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const brokenCalculator = '9' * 3
```
*/

// Solution
const calculation = 'abc' / 5;


// Tests

it('Переменная `calculation` содержит значение', () => {
  expect(calculation).not.undefined;
});

it('Переменная `calculation` равна NaN', () => {
  expect(calculation).NaN;
});

