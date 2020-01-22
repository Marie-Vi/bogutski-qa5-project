const { expect } = require('chai');

/*
Name
Больше, чем предыдущая в 7 раз.

Description

Create variables `stateName` and give a value 'California'
Check if variable stateName is defined
Check if varible stateName is string
Check if variable stateName is equal to "california"

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const stateName = 'Michigan';

```
*/

// Solution
const stateName = 'California';

// Tests

it('Переменная `stateName` содержит значение', () => {
    expect(stateName).not.undefined;
});

it('Переменная `stateName` содержит string', () => {
    expect(stateName).a('string');
});


it('Переменная `stateName` equal to "California"', () => {
    expect(stateName).eq('California');
});
