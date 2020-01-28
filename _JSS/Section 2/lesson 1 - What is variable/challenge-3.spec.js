const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
"Страшное" число

Description
для суеверных людей число 666 является магическим и страшным.  По-другому его называют «числом зверя».
Создайте переменную с именем `beastNumber` и присвойте ей значение 666.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const age = 38;
```
*/

// Solution

const beastNumber = 666;

// Tests

it('переменная `beastNumber` существует и имеет значение', () => {
    expect(beastNumber).not.undefined;
});

it('переменная `beastNumber` является имеет числовой тип', () => {
    expect(beastNumber).a('number');
});

it('переменная `beastNumber` является не является NaN', () => {
    expect(isNaN(beastNumber)).false;
});

it('значение переменной `beastNumber` равно 666', () => {
    expect(beastNumber).equal(666);
});






