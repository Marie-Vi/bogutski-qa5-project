const { expect } = require('chai');

/*
Name
Переменная с именем кота

Description

Создайте переменную `cat` и присвойте ей значение `Mister Poop`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const dog = 'Good Guy';
```

*/

// Solution
const cat = 'Mister Poop';

// Tests
it('Переменная `cat` существует',  () => {
  expect(cat).not.undefined;
});

it('Переменная `cat` является строкой',  () => {
  expect(cat).a('string');
});

it('Переменная `cat` содержит имя кота `Mister Poop`', () => {
  expect(cat).eq('Mister Poop');
});

