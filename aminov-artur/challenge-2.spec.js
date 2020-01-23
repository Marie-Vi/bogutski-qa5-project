const { expect } = require('chai');

/*
Name
Упражнение на слияние строк.

Description

В Солнечной системе имеется восемь известных планет: Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран и Нептун.
Создайте переменную `planet` и присвойте ей значение `Saturn`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const star = 'Sirius';
```
*/

// Solution
const planet = 'Saturn';


// Tests

it('Переменная `planet` содержит значение', () => {
    expect(planet).not.undefined;
});

it('Переменная `planet` содержит тип данных string', () => {
    expect(planet).a('string');
});

it('Переменная `planet` содержит значение "Saturn"', () => {
    expect(planet).eq("Saturn");
});
