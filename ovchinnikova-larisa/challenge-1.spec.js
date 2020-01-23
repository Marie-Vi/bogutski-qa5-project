const { expect } = require('chai');

/*
Name
Увеличение числа в 2 раза

Description
Мария получала зарплату 27 долларов в час. Но однажды ей приснилось,
что ее зарплата удвоена. Какая зарплата ей приснилась?
Напишите команды, увеличивающую значение переменной в два раза.

Для решения задачи:
Создайте переменную `num` и присвойте ей любое число от 0 до 100.
Создайте вторую переменную `numMultTo2`, которая будет использовать
значение переменной `num` умноженное на 2.
То есть переменная `numMultTo2` будет в 2 раза больше `num`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const before = 4;
const after = before * 5;
```
*/

// Solution
const num = 27;
const numMultTo2 = num * 2;

// Tests

  it('should variable `num` be a number',  () => {
    expect(num).a('number');
  });

  it('should variable `num` has a value', () => {
    expect(num).not.undefined;
  });

  it('should variable `num` be in range from 0 to 100',  () => {
    expect(num >= 0 && num <= 100).to.be.true;
  });

  it('should variable `numMultTo2` to be a number',  () => {
    expect(numMultTo2).a('number');
  });

  it('should variable `numMultTo2` has a value', () => {
    expect(numMultTo2).not.undefined;
  });

  it('should variable `numMultTo2` is greater than `num` in 2 times',  () => {
    expect(num * 2).equal(numMultTo2);
  });



