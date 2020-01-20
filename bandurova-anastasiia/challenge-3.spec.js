const { expect } = require('chai');

/*
Name

Получите в результате вычисления Infinity

Description
Создайте переменную `inf`, в которой будет происходить вычисление, где любое число делиться на 0;

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const someInf = 25 / 0;
```

*/
// Solution
const inf = 1 / 0;


// Tests

it('Переменная `inf` содержит значение', () => {
  expect(inf).not.undefined;
});

it('Переменная `inf` содержит число', () => {
  expect(inf).a('number');
});

it('Переменная `inf` равна Infinity', () => {
  expect(inf).eq(Infinity);
});

