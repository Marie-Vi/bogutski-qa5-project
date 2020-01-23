const { expect } = require('chai');

/*
Name
Cумма отрицательных чисел.

Description
Задайте две переменные a и b, присвойте им отрицательные значения.
Для получения результата задайте третью переменную `result`, в которой будет происходить операция сложения.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const x = -1;
const y = -2;
const result = x + y;
```

*/
// Solution
const a = -10;
const b = -3;
const result = a + b;

// Tests

it('Переменная `a` содержит значение', () => {
  expect(a).not.undefined;
});

it('Переменная `b` содержит значение', () => {
  expect(b).not.undefined;
});

it('Переменная `a` равняется отрицательному числу', () => {
  expect(a).lte(0);
});

it('Переменная `b` равняется отрицательному числу', () => {
  expect(b).lte(0);
});

it('Переменная `result` равна сумме переменных a и b', () => {
  expect(result).eq(a + b);
});

it('Переменная `result` отрицателтное число', () => {
  expect(result).lte(0);
});
