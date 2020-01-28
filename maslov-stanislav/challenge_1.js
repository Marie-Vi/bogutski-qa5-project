const { expect } = require('chai');

/*
Операции над числами

В классе 30 детей. Третья часть из всех детей девочки. Создайте переменные `kids` со значением 30 , `girls` и `boys`
Найдите количество мальчиков в классе.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const a = 30;
const b = a / 3;
const c = a - b ;

```
 */

// Solution
const kids = 30;
const girls = kids / 3;
const boys = kids - girls;

// Tests
it('Переменная `kids` существует и имеет  значение', () => {
    expect(kids).not.undefined;
});

it('Переменная `kids` содержит число', () => {
    expect(kids).a('number');
});

it('Переменная `kids` содержит значение', () => {
    expect(kids).eq(30);
});

it('Переменная `girls` существует и имеет  значение', () => {
    expect(girls).not.undefined;
});

it('Переменная `girls` содержит число', () => {
    expect(girls).a('number');
});

it('Переменная `girls` содержит значение', () => {
    expect(girls).eq(kids / 3);
});

it('Переменная `boys` существует и имеет  значение', () => {
    expect(boys).not.undefined;
});

it('Переменная `boys` содержит число', () => {
    expect(boys).a('number');
});

it('Переменная `boys` содержит значение', () => {
    expect(boys).eq( kids - girls);
});