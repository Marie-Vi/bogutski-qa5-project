const { expect } = require('chai');

/*
Name
Убедись что это Mocha

Description
Создавая новый проэкт студентам группы QA18 необходимо установить Mocha.
Что бы это сделать им необходимо ознакомится с тем что же такое Mocha,
выяснить как сделать Installation а также убедится что это нужная им программа.

Итак
Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const framework = 'Mocha';
```
*/

// Solution
const framework = 'Mocha';

// Tests

it('Переменная `framework` существует и содержит значение', () => {
    expect(framework).not.undefined;
});

it('Переменная `framework` тип данных string', () => {
    expect(framework).a('string');
});

it('Переменная `framework` содержит значение `Mocha`', () => {
    expect(framework).eq('Mocha');
});

