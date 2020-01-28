const { expect } = require('chai');

/*
Name
Переменная с названием футбольной команды

Description
Создайте переменную `soccerTeam` и присвойте ей значение `Barсelona`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи

```
const hockey ='CSKA';
```

*/

// Solution
const soccerTeam = 'Barcelona';

// Tests

it('Переменная `soccerTeam` существует и имеет значение', () => {
  expect(soccerTeam).not.undefined;
});

it('Переменная `soccerTeam` содержит тип данных String', () => {
  expect(soccerTeam).a('string');
});

it('Переменная `soccerTeam` содержит значение `Barcelona`', () => {
  expect(soccerTeam).eq('Barcelona');
});


