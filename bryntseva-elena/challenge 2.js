const { expect } = require('chai');

/*
Name
Переменная с названием овоща

Description

В магазине продают разнообразные овощи. Вы очень любите капусту, но чтобы продавец Вам ее продал Вам надо создать переменную 'vegetable' со значением "cabbage".

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const vegetab = 'broccoli';

```
*/

// Solution
const vegetable = 'cabbage';


// Tests

it('Переменная `vegetable` существует и имеет значение', () => {
    expect(vegetable).not.undefined;
});

it('Переменная `vegetable` содержит тип данных string', () => {
    expect(vegetable).a('string');
});

it('Переменная `vegetable` содержит значение `cabbage`', () => {
    expect(vegetable).eq('cabbage');
});

