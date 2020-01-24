const { expect } = require('chai');

/*
Name
Переменная с названием авто детали.

Description

Создайте переменную `carParts` и присвойте ей значение `Alternator`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const carMake = 'Lexus';
```
*/

// Solution
const carParts = 'Alternator';


// Tests

it('Переменная `carParts` содержит значение ', () => {
    expect(carParts).not.undefined;
});

it('Переменная `carParts` содержит строку', () => {
    expect(carParts).a('string');
});

it('Переменная `carParts` содержит значение ', () => {
    expect(carParts).equal('Alternator');
});

