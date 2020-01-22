const { expect } = require('chai');

/*
Переменная с иминем героя

Description

Создайте переменную `myHero` и присвойте ей любое значение.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const nick = 'Sponge Bob';

```
*/

// Solution
const myHero = 'Pavlik Morozoff';


// Tests

it('Переменная "myHero"существует и имеет значение', () => {
  expect(myHero).not.undefined;
});

it('Переменная "myHero" явлется string', () => {
  expect(myHero).a('String');
});

it('Переменная "myHero" содержит значение Pavlik Morozoff', () => {
  expect(myHero).eq('Pavlik Morozoff');
});
