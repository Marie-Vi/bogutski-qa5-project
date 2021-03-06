const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Число Эйлера или число «е»

Description
Число Эйлера является знаменитой математической константой, основанием натурального логарифма, трансцендентным числом.
Иногда число «e» называют числом Эйлера или числом Непера. Обозначается оно строчной латинской буквой «e».
Число приблизительно равно 2.7
Создайте переменную с именем `e` и присвойте ей значение 2.7

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const a = 3.8;
```
*/

// Solution

const e = 2.7;

// Tests

it('переменная `e` существует и имеет значение', () => {
    expect(e).not.undefined;
});

it('переменная `e` является числом', () => {
    expect(e).a('number');
});

it('значение переменной `e` равно 2.7', () => {
    expect(e).equal(2.7);
});






