const { expect } = require('chai');
/*
Name
Переменная с именем журнала.

Description
Название этого американского журнала дословно переводится "перекати-поле" или "катящийся камень".

Создайте переменную `americanMagazine` и присвойте ей значение 'Rolling Stone'.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const popularAuthor = 'Stephen King';
```
 */

// Solution
const americanMagazine = 'Rolling Stone';

// Tests

it('Переменная `americanMagazine` существует и имеет значение', () => {
    expect(americanMagazine).not.undefined;
});

it('Переменная `americanMagazine` содержит тип данных string',  () => {
    expect(americanMagazine).a('string');
});

it('Переменная `americanMagazine` содержит значение `Rolling Stone`', () => {
    expect(americanMagazine).eq('Rolling Stone');
});