const {expect} = require('chai');

/*
Создайте переменную с названием марки автомобиля "ferrari, и присвойте ей значение модели автомобиля "Enzo".

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const bmw = m3

```
 */

//Solution

const ferrari = 'Enzo';

//Tests

it('Переменная `ferrari` существует и ей присвоено значение', () =>  {
    expect(ferrari).not.undefined;
});

it('Переменная `ferrari` отвечает типу `string`', () =>  {
    expect(ferrari).a('string');
});

it('Переменной `ferrari` присвоено значение `Enzo` ', () =>  {
    expect(ferrari).eq('Enzo');
});