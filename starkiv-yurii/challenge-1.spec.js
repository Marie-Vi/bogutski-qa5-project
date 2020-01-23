const { expect } = require('chai');

/*
Name
Подарок на Рождество.

Description

Вот и наступил декабрь, время первого снега и подготовки к Рождеству.
Ëлку купили, украшение тоже. Даже Санте печенье испекли. Теперь нужно
написать письмо Санте. Так что мы хотим больше всего?
Создайте переменную `gift` и присвойте ей значение `Job offer`.


Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:

```
const gift = 'MacBook Pro';

```
*/

// Solution
const gift = 'Job offer';

// Tests

it('Переменная `gift` существует и содержит значение', () => {
    expect(gift).not.undefined;
});

it('Переменная `gift` gift тип данных string', () => {
    expect(gift).a('string');
});

it('Переменная `gift` содержит значение `Job offer`', () => {
    expect(gift).eq('Job offer');
});
