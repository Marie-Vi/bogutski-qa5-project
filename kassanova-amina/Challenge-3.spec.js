const { expect } = require('chai');

/* Name

Водопад Ниагара

Description

Создайте переменную `waterfall` и присвойте ей 'Niagara Falls'.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const name = 'Sponge Bob';

```
*/

// Solution
const waterfall = 'Niagara falls';

// Tests

it('Переменная `waterfall` существует', () => {
    expect(waterfall).not.undefined;
});

it('Переменная `waterfall` содержит тип данных string', () => {
    expect(waterfall).a('string');
});

it('Переменная `waterfall` имеет значение', () => {
    expect(waterfall).eq('Niagara falls');
});
