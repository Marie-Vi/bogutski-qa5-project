const { expect } = require('chai');

/*
Name
Разница 2х значений.

Description
Задайте две переменные a и b, присвойте им целые числа.
Для получения результата задайте третью переменную `difference`, в которой будет происходить операция вычитания.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const a = 10;
const b = 5;
const difference = a-b;
```

*/
// Solution
const a = 40;
const b = 4;
const difference = a - b;

// Tests

it('Переменная `a` существует и содержит значение', () => {
    expect(a).not.undefined;
});

it('Переменная `a` существует и содержит значение', () => {
    expect(a).a('number');
});

it('Переменная `b` существует и содержит значение', () => {
    expect(b).not.undefined;
});

it('Переменная `b` существует и содержит значение', () => {
    expect(b).a('number');
});

it('Переменная `a` равняется целому числу', () => {
    expect(a%1).eq(0);
});

it('Переменная `b` равняется целому числу', () => {
    expect(b%1).eq(0);
});

it('Переменная `difference` равна разнице a и b', () => {
    expect(difference).eq(a - b);
});
