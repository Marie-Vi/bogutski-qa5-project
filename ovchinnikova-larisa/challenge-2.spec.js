const {expect} = require('chai');

/*
Name
Возведение числа в квадрат

Description
Фермер имеет квадратный участок земли. Он построил ограду вокруг участка и измерил ее длину.
Длина ограды равна 600 метров. Фермер хочет купить семян для посадки,
но чтобы рассчитать необходимое количество семян, ему надо знать площадь участка.
Помогите фермеру найти площадь квадратного участка, если известна длина ограды вокруг этого участка.

Для решения задачи:
Создайте переменную `length` и присвойте ей произвольное число от 1 до 1000 (длина ограды)
Создайте переменную `side` и присвойте ей выражение для вычисления стороны квадрата.
Создайте вторую переменную `square`, которая будет использовать
значение переменной `side`, возведенное в квадрат 2.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const x = 2;
const y = x ** 2;
```
*/

// Solution
const length = 600;
const side = length / 4;
const square = side ** 2;

// Tests

it('should variable `length` has a value', () => {
  expect(length).not.undefined;
});

it('should variable `length` be a number', () => {
  expect(length).a('number');
});

it('should variable `length` be in range from 1 to 1000', () => {
  expect(length >= 1 && length <= 1000).to.be.true;
});

it('should variable `side` has a value', () => {
    expect(side).not.undefined;
});

it('should variable `side` be a number', () => {
    expect(side).a('number');
});

it('should variable `side` has correct value', () => {
  expect(side).equal(length/4)
});

it('should variable `square` has a value', () => {
    expect(square).not.undefined;
});

it('should variable `square` to be a number', () => {
    expect(square).a('number');
});

it('should variable `square` equal `side * side` ', () => {
    expect(side ** 2).equal(square);
});



