const { expect } = require('chai');

/*

Description

Создайте переменную `city` и присвойте ей значение 'San Francisco'.


Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const city = 'New York';

```
*/


// Solution

const city = 'San Francisco';
// Tests

it('Переменная `city` существует и имеет значение', () => {
    expect(city).not.undefined;
});

it('Переменная `city` содержит тип данных string', () => {
    expect(city).a('string');
});

it('Переменная `city` содержит значение `San Francisco`', () => {
    expect(city).eq('San Francisco');
});