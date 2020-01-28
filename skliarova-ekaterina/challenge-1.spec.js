const { expect } = require('chai');

/*
Name
Переменная с названием животного

Description

Создайте переменную `animal` и присвойте ей значение `elephant`.
Приведем пример, который принципиально похож на то что нужно сделать:
```
const pet = `cat`;
```
*/

// Solution
const animal = 'elephant';

// Tests

it('Переменная `animal` существует и содержит тип данных string',  () => {
    expect(animal).not.undefined;
});

it('Переменная `animal` содержит строку',  () => {
    expect(animal).a('string');
});

it('Переменная `animal` содержит `elephant`',  () => {
    expect(animal).eq('elephant');
});
