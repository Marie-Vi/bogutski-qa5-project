const { expect } = require('chai');

/*
Name
Создание строки

//Description
Создайте переменную `weather` и присвойте ей значение "Прекрасная погода!"

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const season = "Winter";
*/

//Solution
const weather = "Прекрасная погода!";

//Tests
it('Переменная `weather` существует и имеет значение', () => {
    expect(weather).not.to.be.undefined;
});

it('Переменная `weather`содержит тип данных string', () => {
    expect(weather).a('string');
});

it('Переменная `weather`содержит значение `Прекрасная погода!`', () => {
    expect(weather).eq('Прекрасная погода!');
});


