const { expect } = require('chai');

/*
Name
Объем кубоида

Description

Бобу нужен быстрый способ вычислить объем кубоида с тремя значениями: длина, ширина и высота кубоида.
Напишите формулу, чтобы помочь Бобу в этом расчете.
Создайте переменные с названиями: `length`, `width` и `height`.
Присвойте им значения: 5, 7 и 12 соответственно.
Создайте переменную с названием `volumeOfCuboid`.
Присвойте ей значение, которое вычисляет объем кубоида.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const first = 15;
const second = 20;
const third = 10;

const volumeOfSum = first * second * third;

```
*/

// Solution

const length = 5;
const width = 7;
const height = 12;

const volumeOfCuboid = length * width * height;


// Tests

it('Переменная `length` содержит значение', () => {
    expect(length).not.undefined;
});

it('Переменная `length` содержит тип данных number', () => {
    expect(length).a('number');
});

it('Переменная `length` содержит значение 5 ', () => {
    expect(length).equal(5);
});

it('Переменная `width` содержит значение', () => {
    expect(width).not.undefined;
});

it('Переменная `width` содержит тип данных number', () => {
    expect(width).a('number');
});

it('Переменная `width` содержит значение 7 ', () => {
    expect(width).equal(7);
});

it('Переменная `height` содержит значение', () => {
    expect(height).not.undefined;
});

it('Переменная `height` содержит тип данных number', () => {
    expect(height).a('number');
});

it('Переменная `height` содержит значение 12 ', () => {
    expect(height).equal(12);
});

it('Переменная `volumeOfCuboid` содержит значение', () => {
    expect(volumeOfCuboid).not.undefined;
});

it('Переменная `volumeOfCuboid` содержит тип данных number', () => {
    expect(volumeOfCuboid).a('number');
});

it('Переменная `volumeOfCuboid` содержит значение 420', () => {
    expect(volumeOfCuboid).equal(420);
});




