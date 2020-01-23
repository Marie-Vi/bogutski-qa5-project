const { expect } = require('chai');

/*
Name
Переменная с именем школы.

Description

Создайте переменную `schoolName` и присвойте ей значение "Sierra College".

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const school = 'River College";

```
*/

// Solution
const schoolName = 'Sierra College';
// Tests

it('Переменная `schoolName` существует и имеет значение', () => {
    expect(schoolName).not.undefined;
});

it('Переменная `schoolName` содержит тип данных string', () => {
    expect(schoolName).a('string');
});

it('Переменная `schoolName` содержит значения "Sierra College"', () => {
    expect(schoolName).eq('Sierra College');
});
