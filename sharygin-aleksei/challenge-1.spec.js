const { expect } = require('chai');

/*
Name
Переменная с названием города.

Description

Создайте переменную 'capital' и присвойте ей значение 'Moscow'.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const city = 'New York'
```
*/

// Solution
const capital = 'Moscow';

// Tests

it('Переменная `capital` существует', () => {
    expect(capital).not.undefined;
});

it('Переменная `capital` содержит строку', () => {
    expect(capital).a('string');
});

it("Переменная `capital` содержит 'Moscow'", () => {
    expect(capital).eq("Moscow")
});
