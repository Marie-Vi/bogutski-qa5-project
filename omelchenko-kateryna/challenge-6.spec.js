const {expect} = require('chai');

/* Name
 Boolean false

 Description
Создайте переменную `negative` и присвойте ей значение false путем присваивания результата сравнения двух чисел.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const negative = 25 < 13;
```

Solution
 */
const negative = 17 < -5;

// Tests

it('Переменная `negative` существует и содержит значение', () => {
    expect(negative).not.undefined;
});

it('Переменная `negative` содержит тип данных boolean', () => {
    expect(negative).a('boolean');
});

it('Переменная `negative` принимает значение "false" ', () => {
    expect(negative).eq(false);
});


