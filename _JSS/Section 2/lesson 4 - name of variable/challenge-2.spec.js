const {expect} = require('chai');

/*
Section 2. Переменные. Урок 4. Что в имени тебе моем?

Name
"Стильные" переменные

Short description
Выберите из списка имен переменные в стиле camelCase

Description
Camel case - это практика написания фраз таким образом, что каждое слово или аббревиатура в середине фразы
 начинается с заглавной буквы, без промежуточных пробелов или знаков препинания. Например, `camelCase`.
Стиль camelCase используется для имен переменных в программировании.

Для выполнения задания выберите из списка переменные, имена которых записаны в стиле camelCase,
создайте переменные с этими именами и присвойте переменным значения в виде строки, соответствующей имени.

Список имен:
`eBay`;  `dayReport`; `number_of_tasks`; `dayOfWeek`; `redbook`; `userLogin`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const iPhone  = 'iPhone';
```
*/

// Solution
const eBay = 'eBay';
const dayReport = 'dayReport';
const dayOfWeek = 'dayOfWeek';
const userLogin = 'userLogin';

// Tests

it('переменная `eBay` существует и имеет значение', () => {
    expect(eBay).not.undefined;
});

it('переменная `eBay` имеет тип string', () => {
    expect(eBay).a('string');
});

it('переменная `eBay` имеет правильное значение', () => {
    expect(eBay).equal('eBay');
});

it('переменная `dayReport` существует и имеет значение', () => {
    expect(dayReport).not.undefined;
});

it('переменная `dayReport` имеет тип string', () => {
    expect(dayReport).a('string');
});

it('переменная `dayReport` имеет правильное значение', () => {
    expect(dayReport).equal('dayReport');
});

it('переменная `dayOfWeek` существует и имеет значение', () => {
    expect(dayOfWeek).not.undefined;
});

it('переменная `dayOfWeek` имеет тип string', () => {
    expect(dayOfWeek).a('string');
});

it('переменная `dayOfWeek` имеет правильное значение', () => {
    expect(dayOfWeek).equal('dayOfWeek');
});

it('переменная `userLogin` существует и имеет значение', () => {
    expect(userLogin).not.undefined;
});

it('переменная `userLogin` имеет тип string', () => {
    expect(userLogin).a('string');
});

it('переменная `userLogin` имеет правильное значение', () => {
    expect(userLogin).equal('userLogin');
});
