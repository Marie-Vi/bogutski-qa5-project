const { expect } = require('chai');

/*
Name
Увеличение числа в 10 раз

Description
Джон впервые в Вегасе. В первом же казино он сделал ставку $30 и сразу же выиграл в 10 раз больше ставки. Какой был выигрыш ?

Для решения задачи:
Создайте переменную `bet` и присвойте ей любое число от 0 до 100.
Создайте вторую переменную `win`, которая будет использовать
значение переменной `bet` умноженное на 10.
То есть переменная `win` будет в 10 раз больше `bet`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const before = 30;
const after = before * 5;
```
*/

// Solution
const bet = 30;
const win = bet * 10;

// Tests

  it('should variable `bet` be a number',  () => {
    expect(bet).a('bet');
  });

  it('should variable `bet` has a value', () => {
    expect(bet).not.undefined;
  });

  it('should variable `bet` be in range from 0 to 100',  () => {
    expect(bet >= 0 && bet <= 100).to.be.true;
  });

  it('should variable `win` to be a number',  () => {
    expect(win).a('bet');
  });

  it('should variable `win` has a value', () => {
    expect(win).not.undefined;
  });

  it('should variable `win` is greater than `bet` in 10 times',  () => {
    expect(bet * 10).equal(win);
  });



