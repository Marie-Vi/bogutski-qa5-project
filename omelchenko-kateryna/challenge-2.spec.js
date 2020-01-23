const {expect} = require('chai');

// Name
// Разница количества роллов

// Description
/*
Катя и Саша пошли в суши ресторан. Катя сказала, что она не голодная.
Саша заказал 20 роллов, но Катя все равно скушала 5 Сашиных роллов.
Сколько роллов осталось у Саши?

Создайте переменную `rolls` и присвойте ей значение 20.
Создайте переменную `leftoverRolls` и посчитайте, сколько же у Саши осталось роллов.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const cupcakes = 8;
const leftoverCupcakes = cupcakes - 3;
```

 Solution

 */
const rolls = 20;
const leftoverRolls = rolls - 5;

// Tests

it('Переменная `rolls` содержит значение', () => {
    expect(rolls).not.undefined;
});

it('Переменная `rolls` содержит число', () => {
    expect(rolls).a('number');
});

it('Переменная `rolls` имеет значение 20', () => {
    expect(rolls).eq(20);
});

it('Переменная `leftoverRolls` содержит значение', () => {
    expect(leftoverRolls).not.undefined;
});

it('Переменная `leftoverRolls` содержит число', () => {
    expect(leftoverRolls).a('number');
});


it('Переменная `leftoverRolls` имеет значение 15', () => {
    expect(leftoverRolls).eq(15);
});

