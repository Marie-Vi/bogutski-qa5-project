const { expect } = require('chai');
/*
Name

Переменная с названием котенка

Description

Создайте переменную `kitten` и присвойте ей значение `Simba`.
Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте
 */
//Solution:

const kitten = 'Simba';

it('Переменная `kitten` существует и имеет значение',() =>{
    expect(kitten).not.undefined;
});

it('Переменная `kitten` содержит тип данных string ',() =>{
    expect(kitten).a('string');
});


it('Переменная `kitten` содержит тип данных string ',() =>{
    expect(kitten).eq('Simba');
});



