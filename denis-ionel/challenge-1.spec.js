const { expect } = require('chai');

/*
Name
Переменная с именем героя
Description
Создайте переменную `name` и присвойте ей значение 'Peter Pan'.
Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const name = 'Patrick Star';
```
*/

// Solution
const name = 'Peter Pan';

// Tests

it('Переменная `name` существует и имеет значение', () => {
    expect(name).not.undefined;
});

it('Переменная `name` содержит тип данных string', () => {
    expect(name).a('string');
});

it('Переменная `name` содержит значение `Peter Pan`', () => {
    expect(name).eq('Peter Pan');
});