const {expect} = require('chai');

/* Name
 Boolean true

 Description
Создайте переменную `positive` и присвойте ей значение true путем присваивания результата сравнения двух чисел.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const positive = 15 > -3;
```

Solution
 */
const positive = 10 > 2;

// Tests

it('Переменная `positive` существует и содержит значение', () => {
    expect(positive).not.undefined;
});

it('Переменная `positive` содержит тип данных boolean', () => {
    expect(positive).a('boolean');
});

it('Переменная `positive` принимает значение "true" ', () => {
    expect(positive).eq(true);
});


