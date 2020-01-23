const { expect } = require('chai');

/*
Name
Переменная с названием машины

Description:

Создайте переменную `car` и присвойте ей значение `Ferrari`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const vehicle = 'BMW';
```

*/

// Solution
const car = 'Ferrari';

// Tests

it('Переменная `car` содержит значение', () => {
  expect(car).not.undefined;
});

it('Переменная `car` содержит строку', () => {
  expect(car).a('string');
});

it('Переменная `car` содержит `Ferrari`', () => {
  expect(car).eq('Ferrari');
});

