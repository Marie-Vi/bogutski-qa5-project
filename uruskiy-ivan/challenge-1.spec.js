const { expect } = require('chai');

/*
Name
Переменная с именем птица

Description

Создайте переменную `bird` и присвойте ей значение `Eagle`.

Приведем пример, который принципиально похож на то что нужно сделать:

```
const dog = 'Good Guy';
```

*/

// Solution
const bird = 'Eagle';

// Tests
it('переменная `bird` существует',  () => {
  expect(bird).not.undefined;
});

it('переменная `bird` является строкой',  () => {
  expect(bird).a('string');
});

it('переменная `bird` содержит имя bird `Eagle`', () => {
  expect(bird).eq('Eagle');
});

