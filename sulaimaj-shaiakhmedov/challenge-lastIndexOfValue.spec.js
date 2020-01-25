const {expect} = require('chai');

/*
Name
Значение последнего символа строки
Тема Тип данных Boolean

Description

Создайте переменную `country` и присвойте ей значение 'USA' типа String.
Создайте переменную `lastElement` типа String и присвойте ей значение последнего элемента переменной `country`.
Проверьте, что последний символ переменной `country`  действительно равен значению переменной `lastElement` и принимает значение true.
Создайте новую переменную, где проверяется, является ли значение переменной `lastElement` последнему элементом `country`.

Приведем пример, который принципиально похож на то что нужно сделать:
```
const city = 'Moscow';
const element = 'w';
let checkLastElement=city.endsWith('w')==true;
```

*/

// Solution
const country = "USA";
const lastElement = 'A';
let lastElementOfcountry=country.endsWith(lastElement);
lastElementOfcountry==true;


// Tests
it('should variable `country` be initiated and defined', () => {
    expect(country).not.undefined;
});
it('should variable `lastElement` be initiated and defined', () => {
    expect(lastElement).not.undefined;
});

it('should variable `country` has assigned a String value', () => {
    expect(country).a('string');
});

it('should variable `lastElement` has assigned a String type value', () => {
    expect(lastElement).a('string');
});

it('should variable `country` has value of `lastElement` as a last index and equals true', () => {
    expect(lastElementOfcountry).to.be.true;
});
