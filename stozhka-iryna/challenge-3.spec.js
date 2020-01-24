const { expect } = require('chai');

/*
Name
Полупериметр треугольника.

Description
Если известны все три стороны треугольника a, b, c, то формула полупериметра
треугольника по трем сторонам легко применится на практике:
где:

p – полупериметр треугольника,
a, b, c – длины сторон треугольника.

Соответственно полупериметр – это сумма длин всех сторон разделенная на 2.
p=(a+b+c)/2

Создайте переменные с названиями: `sideA`, `sideB` и `sideC`
Присвойте им значения: 12, 9 и 11 соответственно.
Создайте переменную с названием `polyPerimeterOfTriangle`.
Присвойте ей значение, которое вычисляет полупериметр треугольника.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const first = 15;
const second = 20;
const third = 10;
const volumeOfSum = (first + second + third)/2;
*/

// Solution

const sideA = 12;
const sideB = 9;
const sideC = 11;

const polyPerimeterOfTriangle = (sideA + sideB + sideC)/2;


// Tests

it('Переменная `sideA` содержит значение', () => {
    expect(sideA).not.undefined;
});

it('Переменная `sideA` содержит тип данных number', () => {
    expect(sideA).a('number');
});

it('Переменная `sideA` содержит значение 12', () => {
    expect(sideA).equal(12);
});

it('Переменная `sideB` содержит значение', () => {
    expect(sideB).not.undefined;
});

it('Переменная `sideB` содержит тип данных number', () => {
    expect(sideB).a('number');
});

it('Переменная `sideB` содержит значение 9', () => {
    expect(sideB).equal(9);
});

it('Переменная `sideC` содержит значение', () => {
    expect(sideC).not.undefined;
});

it('Переменная `sideC` содержит тип данных number', () => {
    expect(sideC).a('number');
});

it('Переменная `sideC` содержит значение 11', () => {
    expect(sideC).equal(11);
});

it('Переменная `polyPerimeterOfTriangle` содержит значение', () => {
    expect(polyPerimeterOfTriangle).not.undefined;
});

it('Переменная `polyPerimeterOfTriangle` содержит тип данных number', () => {
    expect(polyPerimeterOfTriangle).a('number');
});

it('Переменная `polyPerimeterOfTriangle` содержит значение 16', () => {
    expect(polyPerimeterOfTriangle).equal(16);
});


