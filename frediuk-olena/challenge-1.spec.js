const { expect } = require('chai');

/*
Name
Кто твое домашнее животное?

Description

Создайте переменную `pet` и присвойте ей значение 'Dog'.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const pet = 'Goldfish';
```
*/


// Solution
const pet = 'Dog';

// Tests

it('Переменная `pet` существует и имеет значение', () => {
    expect(pet).not.undefined;
});

it('Переменная `pet` содержит тип данных string', () => {
    expect(pet).a('string');
});

it('Переменная `pet` содержит значение  `Dog`', () => {
    expect(pet).eq('Dog');
});