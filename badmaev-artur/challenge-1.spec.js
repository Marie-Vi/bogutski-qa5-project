const { expect } = require('chai');

// Name
// Переменная с названием футбольной команды

// Description
// Создайте переменную `footballTeam` и присвойте ей значение `Barсelona`.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи
//const  hockey ='CSKA';

// Solution
const footballTeam ='Barcelona';

// Tests


it('Переменная `football` сушествует и имеет значение', () => {
  expect(footballTeam).not.undefined;
});

it('Переменная `football` содержит тип данных String', () => {
  expect(footballTeam).a('string');
});

it('Переменная `football` содержит значение `Barcelona`', () => {
  expect(footballTeam).eq('Barcelona');
});


