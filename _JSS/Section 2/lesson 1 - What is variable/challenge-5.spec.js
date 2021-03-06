const {expect} = require('chai');

/*
Section 2. Переменные. Урок 1. Что такое переменная?

Name
Золотое сечение

Description
Самым популярным в мире числом считают `золотое сечение` – это пропорция,
полученная делением величины
(например, длины отрезка) на две части таким образом, при котором отношение
большей части к меньшей равно отношению
всей величины к её большей части. Золотое сечение равно около 1,618.

Создайте переменную с именем `goldRatio` и присвойте ей значение 1.618

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const silver = 3.878323;
```
*/

// Solution

const goldRatio = 1.618;

// Tests

it('переменная `goldRatio` существует и имеет значение', () => {
    expect(goldRatio).not.undefined;
});

it('переменная `goldRatio` является числом', () => {
    expect(goldRatio).a('number');
});

it('значение переменной `goldRatio` равно 2.7', () => {
    expect(goldRatio).equal(1.618);
});






