const { expect } = require('chai');

/*
Name
Переменная с именем кота

Description

Создайте переменную `cat` и присвойте ей значение `Mister Poop`.

Приведем пример, который принципиально похож на то что нужно сделать:

```
const dog = 'Good Guy';
```

*/

// Solution
const cat = 'Mister Poop';

// Tests
it('переменная `cat` существует',  () => {
  expect(cat).not.undefined;
});

it('переменная `cat` является строкой',  () => {
  expect(cat).a('string');
});

it('переменная `cat` содержит имя кота `Mister Poop`', () => {
  expect(cat).eq('Mister Poop');
});

