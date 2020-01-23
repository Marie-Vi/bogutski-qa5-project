const {expect} = require('chai');

/*
Name
Странная подпись МакДональда

Description

Фермер Benjamin McDonald очень не любил свое длинное имя и подписывался только первой буквой,
после которой обязательно ставил восклицательный знак.

Создайте переменную `name` и присвойте ей значение любого имени.
Создайте переменную sign, присвойте ей значение первой буквы имени, за которой следует восклицательный знак.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const name = 'Moscow';
const shortName = word[0] + '.';
```
*/

// Solution
const name = 'Benjamin McDonald';
const sign = name[0] + '!';

// Tests

it('переменная `name` существует и имеет значение', () => {
    expect(name).not.undefined;
});

it('переменная `num` является строкой', () => {
    expect(name).a('string');
});

it('переменная `sign` существует и имеет значение', () => {
    expect(sign).not.undefined;
});

it('переменная `sign` является строкой', () => {
    expect(sign).a('string');
});

it('переменная `sign` вычислена верно', () => {
    const expected = name[0] + '!';
    expect(sign).equal(expected);
});



