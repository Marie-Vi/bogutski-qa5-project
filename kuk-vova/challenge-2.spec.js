const { expect } = require('chai');

/*
Name
Функция Месси

Description

Месси - футболист с целями в трех лигах:

LaLiga
Copa
Champions

Создайте переменные с названиями лиги и присвойте им значения - количество забитых голов за сезон,
в каждой лиге соответственно: 25, 17, 12.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const ligaFirst = 30;
const ligaSecond = 20;
const ligaThird = 10;


```
*/

// Solution

const ligaLaLiga = 25;
const ligaCopa = 17;
const ligaChampions = 12;


// Tests

it('Переменная `ligaLaLiga` содержит значение', () => {
    expect(ligaLaLiga).not.undefined;
});

it('Переменная `ligaLaLiga` содержит тип данных number', () => {
    expect(ligaLaLiga).a('number');
});

it('Переменная `ligaLaLiga` содержит значение 25 ', () => {
    expect(ligaLaLiga).equal(25);
});

it('Переменная `ligaCopa` содержит значение', () => {
    expect(ligaCopa).not.undefined;
});

it('Переменная `ligaCopa` содержит тип данных number', () => {
    expect(ligaCopa).a('number');
});

it('Переменная `ligaCopa` содержит значение 17 ', () => {
    expect(ligaCopa).equal(17);
});

it('Переменная `ligaChampions` содержит значение', () => {
    expect(ligaChampions).not.undefined;
});

it('Переменная `ligaChampions` содержит тип данных number', () => {
    expect(ligaChampions).a('number');
});

it('Переменная `ligaChampions` содержит значение 12 ', () => {
    expect(ligaChampions).equal(12);
});




