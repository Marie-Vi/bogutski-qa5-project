const { expect } = require('chai');

/*
Name
Операции с инкрементом и декрементом.

Description

Создайте переменную `count` и присвойте ей любое число от 1 до 20.
Создайте вторую переменную `countPlus`, которая будет использовать
значение переменной `count` плюс 1.
То есть переменная `countPlus` будет на 1 больше `count`. Что можно также записать как count++, эта операция называется инкрементом.
Создайте третью переменную `countMinus`, которая будет использовать
значение переменной `count` минус 1.
То есть переменная `countMinus` будет на 1 меньше `count`. Что можно также записать как count--, эта операция называется декрементом.
Приведем пример, который принципиально похож на то что нужно сделать:
```
const start = 5;
const plus = start + 1; // or start++
const minus = start - 1; // or star--
```

*/

// Solution
const count = 10;
const countPlus = count + 1; // or count++
const countMinus = count - 1; // or count--


// Tests

it('Переменная `count` существует и ей присвоено какое-то значение', () => {
    expect(count).not.undefined;
});

it('Переменная `count` является числом',  () => {
    expect(count).a('number');
});

it('Переменная `countPlus` является числом',  () => {
    expect(countPlus).a('number');
});

it('Переменная `countPlus` существует и ей присвоено какое-то значение', () => {
    expect(countPlus).not.undefined;
});

it('Переменная `countMinus` является числом',  () => {
    expect(countMinus).a('number');
});

it('Переменная `countMinus` существует и ей присвоено какое-то значение', () => {
    expect(countMinus).not.undefined;
})

it('Переменная `countPlus` является результатом сложения переменной `count` и числа 1',  () => {
    expect(countPlus).to.equal(count + 1);
});

it('Переменная `countMinus` является результатом вычитания из переменной `count` числа 1',  () => {
    expect(countMinus).to.equal(count - 1);
});




