const { expect } = require('chai');

// Взято в курс

/*

Name
Переменная с именем компании.

Description
В 1997 г. основатели компании Ларри Пейдж и Сергей Брин обратились в Yahoo,
чтобы продать свою разработку, но получили отказ.

Создайте переменную `nameOfCompany` и присвойте ей значение 'Google'.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const biggestOnlineShop = 'Amazon';
```
 */

// Solution
const nameOfCompany = 'Google';

// Tests

it('Переменная `nameOfCompany` существует и имеет значение', () => {
    expect(nameOfCompany).not.undefined;
});

it('Переменная `nameOfCompany` содержит тип данных string',  () => {
    expect(nameOfCompany).a('string');
});

it('Переменная `nameOfCompany` содержит значение `Google`', () => {
    expect(nameOfCompany).eq('Google');
});




