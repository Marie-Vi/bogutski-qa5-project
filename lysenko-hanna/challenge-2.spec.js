const { expect } = require('chai');

/*
Name
Конкатенация.

Description

Создайте переменную `string` и присвойте ей значение "5".
Создайте переменную `number` и присвойте ей значение 5.
Создайте переменную `c` и присвойте ей значение соединения переменных string и number.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const a = '8';
const b = 8;
const c = a + b;

```
*/

// Solution

const string = '5';
const number = 5;
const sum = string + number;

// Tests

describe('Переменная `string`', () => {
    it('Переменная `string` существует и имеет значение', () => {
        expect(string).not.undefined;
    });

    it('Переменная `string` содержит тип данных string', () => {
        expect(string).a('string');
    });

    it('Переменная `string` сoдержит значения "5"', () => {
        expect(string).equal('5');
    });

    it('Переменная `string` не сoдержит значения isNaN', () => {
        expect(isNaN(string)).false;
    });

    it('Переменная `string` не сoдержит  значения Number.isNaN', () => {
        expect(Number.isNaN(string)).false;
    });

    it('Переменная `string` принимает тип данных number', () => {
        expect(+(string)).a('number');
    });
});


describe('Переменная `number`', () => {
    it('Переменная `number` существует и имеет значение', () => {
        expect(number).not.undefined;
    });

    it('Переменная `number` содержит тип данных number', () => {
        expect(number).a('number');
    });

    it('Переменная `number` сoдержит значения 5', () => {
        expect(number).equal(5);
    });

    it('переменная `number` является целым числом', () => {
        expect(Number.isInteger(number));
    });
});


describe('Переменная `sum`', () => {
    it('Переменная `sum` существует и имеет значение', () => {
        expect(sum).not.undefined;
    });

    it('Переменная `sum` содержит тип данных string', () => {
        expect(sum).a('string');
    });

    it('Переменная `sum` сoдержит значения "55"', () => {
        expect(sum).equal('55');
    });

    it('Переменная `sum` не сoдержит значения isNaN', () => {
        expect(isNaN(sum)).false;
    });

    it('Переменная `sum` сoдержит  принимает тип данных number', () => {
        expect(+(sum)).a('number');
    });

    it('Переменная `sum` ровняеться 10', () => {
        expect(+(string) + (number)).eq(10);
    });
});