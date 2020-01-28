const { expect } = require('chai');

/*
Name
Переменная с именем птицы

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
it('Переменная `bird` существует',  () => {
  expect(bird).not.undefined;
});

it('Переменная `bird` – строка',  () => {
  expect(bird).a('string');
});

it('Переменная `bird` содержит строку `Eagle`', () => {
  expect(bird).eq('Eagle');
});

