const { expect } = require('chai');

/*
Name
Значение последнего символа строки
Тема Тип данных Boolean

Description

Создайте переменную типа String `country` и присвойте ей значение 'USA'.
Создайте переменную String `lastElement` и присвойте ей значение 'A'.
Проверьте, что последний символ переменной `country`  действительно равен значению переменной `lastElement`.

Приведем пример, который принципиально похож на то что нужно сделать:
```
const city = 'Moscow';
const element = 'w';
city.endsWith('w')==true;
```

*/

// Solution
const country = "USA";
const lastElement = 'A';
console.log(country.endsWith(lastElement)==true);

// Tests
it('should variable `country` be initiated and defined',  () => {
  expect(country).not.undefined;
});
it('should variable `lastElement` be initiated and defined',  () => {
  expect(lastElement).not.undefined;
});

it('should variable `country` be a String type',  () => {
  expect(country).a('string');
});

it('should variable `lastElement` be a String type',  () => {
  expect(lastElement).a('string');
});

it('should variable `country` has value of `lastElement` as a last index',  () => {
  expect(country).endsWith(lastElement).equal(true);
});
