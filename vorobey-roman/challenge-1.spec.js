const { expect } = require('chai');
/*
Name

Переменная с породой собак.

Description

Немецкая овчарка – одна из самых популярных во всём мире пород собак.
Первый представитель породы немецких овчарок, пёс по кличке Грайф,
был представлен на выставке в Ганновере в 1882 году.

Создайте переменную `dogBreed` и присвойте ей значение 'German Shepherd'.

Приведем пример, который похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const catBreed = 'Siamese';
```
 */

// Solution
const dogBreed = 'German Shepherd';

// Tests
it('Переменная `dogBreed` существует и имеет значение', () => {
  expect(dogBreed).not.undefined;
});

it('Переменная `dogBreed` содержит тип данных string', () => {
  expect(dogBreed).a('string');
});

it('Переменная `dogBreed` содержит значение `German Shepherd`', () => {
  expect(dogBreed).eq('German Shepherd');
});
