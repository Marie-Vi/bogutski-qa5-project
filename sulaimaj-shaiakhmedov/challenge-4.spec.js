const { expect } = require('chai');

/*
Sum
Вывести сумму двух переменных integer

Description

Создайте переменную `name` и присвойте ей значение 'James Bond'.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const nick = 'Name';

```
*/

// Solution
let nameHero='Abd';

// Tests

it('Переменная nameHero существует и имеет значение', () => {
  expect(nameHero).not.undefined;
});

it('Переменная `nameHero` содержит тип данных String', () => {
  expect(nameHero).a('String');
});

it('Значение переменной nameHero содержит значение \nAbd', () => {
  expect(nameHero).equal('Abd');
});

