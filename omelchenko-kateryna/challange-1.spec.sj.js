const {expect} = require('chai');

// Name
// Сумма яблок

// Description
/*
Лена и Мария собирали яблоки. Лена собрала 2 корзинки яблок, а Мария собрала на 3 корзинки больше.
Сколько корзинок яблок собрала Мария? Сколько корзинок собрали девушки вместе?

Создайте переменную applesLena и присвойте ей значение 2.
Создайте переменную applesMaria и посчитайте ее значение.
Создайте переменную applesTotal и присвойте в нее сумму переменных applesLena и applesMaria.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const bananasPeter = 5;
const bananasNick = bananasPeter + 3;
const bananasTotal = bananasPeter + bananasNick;
```

 Solution

 */
const applesLena = 2;
const applesMaria = applesLena + 3;
const applesTotal = applesLena + applesMaria;

// Tests

it('Переменная `applesLena` содержит значение', () => {
    expect(applesLena).not.undefined;
});

it('Переменная `applesLena` содержит число', () => {
    expect(applesLena).a('number');
});

it('Переменная `applesLena` имеет значение 2', () => {
    expect(applesLena).eq(2);
});

it('Переменная `applesMaria` содержит значение', () => {
    expect(applesMaria).not.undefined;
});

it('Переменная `applesMaria` содержит число', () => {
    expect(applesMaria).a('number');
});

it('Переменная `applesMaria` больше чем `applesLena` на 3', () => {
    expect(applesLena + 3).eq(applesMaria);
});

it('Переменная `applesMaria` имеет значение 5', () => {
    expect(applesMaria).eq(5);
});

it('Переменная `applesTotal` содержит значение', () => {
    expect(applesTotal).not.undefined;
});

it('Переменная `applesTotal` содержит число', () => {
    expect(applesTotal).a('number');
});

it('Переменная `applesTotal` имеет значение 7', () => {
    expect(applesTotal).eq(7);
});

